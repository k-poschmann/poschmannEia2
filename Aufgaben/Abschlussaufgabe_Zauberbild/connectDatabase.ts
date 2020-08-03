namespace Zauberbild {
    let url: string = "https://hfucocktailbar.herokuapp.com/";
    let titleoption: string[];



    export interface Pic {
        position: Vector;
        color: string;
        rotation: number;
        velocity: Vector;
        active: boolean;
    }

    //Funktion, die Farbe, Animation und Position speichert, sowie die Canvasgröße
    export function savePic(_title: string): void {
        let infos: Pic[] = [];
        for (let symbol of symbols) {
            let figure: Pic = {
                "position": symbol.position,
                "color": symbol.color,
                "rotation": symbol.rotation,
                "velocity": symbol.velocity,
                "active": symbol.active
            };
            infos.push(figure);
        }

        sendData(infos, _title);
    }



    //Funktion, die die Daten an Datenbank schickt (sendData)
    async function sendData(_infos: Pic[], _title: string): Promise<void> {
        let width: string = canvas.width.toString();
        let height: string = canvas.height.toString();
        let canvasinfo: string[] = [width, height];
        let canvasjsn: string = JSON.stringify(canvasinfo);
        let canvasquery: URLSearchParams = new URLSearchParams(canvasjsn);

        let infos: string = JSON.stringify(_infos);  // in JSON String umwandeln, um für Server lesbar zu machen
        let query: URLSearchParams = new URLSearchParams(infos);
        let response: Response = await fetch(url + "?" + query + "&" + canvasquery + "&" + _title);

        let responsetext: string = await response.text();
        console.log(responsetext);
        alert("Bild wurde gespeichert");
    }

    // Funktion, die die Bilder aus der Datenbank findet
    export async function loadPic(_title: string): Promise<void> {
        symbols = [];
        let name: string = list.value;
        let response: Response = await fetch(url + "findPicture&" + name);
        let text: string = await response.text();
        console.log(text);
        let replace: string = text.replace(/\\|\[|{|}|"|_id|savePicture|]/g, "");
        let removetitle: string = replace.replace(name, "");
        let correction: string = removetitle.replace(/,,,/g, "");
        let removekeys: string = correction.replace(/position:|color:|rotation:|velocity:|active:/g, "");
        let data: string[] = removekeys.split(",");
        console.log(data);

        canvas.width = parseInt(data[1]);
        canvas.height = parseInt(data[2]);
        data.splice(0, 6);

        let info: string[] = [];
        for (let i: number = 0; i < data.length; i++) {
            switch (data[i]) {
                case "Star":
                    let positionStar: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let star: Star = new Star(positionStar);
                    star.draw(cxt);
                    symbols.push(star);
                    info = [];
                    break;
                case "Heart":
                    let positionHeart: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let heart: Heart = new Heart(positionHeart);
                    heart.draw(cxt);
                    symbols.push(heart);
                    info = [];
                    break;
                case "Moon":
                    let positionMoon: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let moon: Heart = new Heart(positionMoon);
                    moon.draw(cxt);
                    symbols.push(moon);
                    info = [];
                    break;
                case "Flash":
                    let positionFlash: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let flash: Heart = new Heart(positionFlash);
                    flash.draw(cxt);
                    symbols.push(flash);
                    info = [];
                    break;
            }
        }
    }

    // Funktion, die Namen aus Server holt
    export async function findPicture(): Promise<void> {
        let response: Response = await fetch(url + "?" + "getPicture=yes");
        let responseText: string = await response.text();
        let pretty: string = responseText.replace(/\\|\[|{|}|"|_id|insertName|]/g, "");
        let correction: string = pretty.replace(/,,,/g, ",");
        createDataList(correction);
        // let response: Response = await fetch(url + "?getTitles&");
        // let text: string = await response.text();
        // console.log(text);

        // showTitles(text);
    }


    //Datalist wird generiert
    function createDataList(_response: string): void {
        let picture: HTMLDataListElement = <HTMLDataListElement>document.querySelector("#album");
        titleoption = _response.split(",");
        while (picture.firstChild) {
            picture.removeChild(picture.firstChild);
        }

        for (let entry of titleoption) {
            if (entry == "") {
                //überspringen
            }
            else {
                let option: HTMLOptionElement = document.createElement("option");
                option.setAttribute("name", entry);
                option.value = entry;
                list.appendChild(option);
            }
        }
    }
   
}

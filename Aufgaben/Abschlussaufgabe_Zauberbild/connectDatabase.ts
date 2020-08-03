namespace Zauberbild {
    let url: string = "https://hfucocktailbar.herokuapp.com/";



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
        let response: Response = await fetch(url + "?getImage" + _title);
        let text: string = await response.text();
        let replace: string = text.replace(/\\|\[|{|}|"|name|:|]/g, "");
        let correctArray: string[] = replace.split(",");
        console.log(correctArray);

        cxt.canvas.width = parseInt(correctArray[1]);
        cxt.canvas.height = parseInt(correctArray[2]);

        correctArray.splice(0, 6);

        let info: string[] = [];

        for (let i: number = 0; i < correctArray.length; i++) {
            switch (correctArray[i]) {
                case "star":
                    let positionStar: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let star: Star = new Star(positionStar);
                    star.draw(cxt);
                    symbols.push(star);
                    info = [];
                    break;
                case "heart":
                    let positionHeart: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let heart: Heart = new Heart(positionHeart);
                    heart.draw(cxt);
                    symbols.push(heart);
                    info = [];
                    break;
                case "moon":
                    let positionMoon: Vector = new Vector(parseInt(info[1]), parseInt(info[2]));
                    let moon: Heart = new Heart(positionMoon);
                    moon.draw(cxt);
                    symbols.push(moon);
                    info = [];
                    break;
                case "flash":
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
    export async function fetchTitles(): Promise<void> {
        let response: Response = await fetch(url + "?getTitles&");
        let text: string = await response.text();
        console.log(text);

        showTitles(text);
    }

    //Funktion, die die Titel zeigt
    async function showTitles(_title: string): Promise<void> {
        let dbContent: HTMLInputElement = <HTMLInputElement>document.querySelector("#album");
        let replace: string = _title.replace(/\\|\[|Object|object|{|}|"|name|:|]/g, "");
        let correctArray: string[] = replace.split(",");
        dbContent.innerHTML = "";
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        for (let entry of correctArray) {
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

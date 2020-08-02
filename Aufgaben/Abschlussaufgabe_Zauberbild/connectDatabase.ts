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
        //falls noch änderbare HG-Farbe, dann hier definieren
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
    async function searchData(): Promise<void> {

    }

    // Funktion, die Namen aus Server holt
    function fetchTitles(): void {

    }

    // Funktion, die die Liste kreiiert
    function createTitleList(): void {
        
    }
}

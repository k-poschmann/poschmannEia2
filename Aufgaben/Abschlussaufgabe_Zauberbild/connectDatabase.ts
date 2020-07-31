namespace Zauberbild {
    let url: string = "https://hfucocktailbar.herokuapp.com/";



    export interface Pic {
        position: Vector;
        color: string;
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
                "velocity": symbol.velocity,
                "active": symbol.active
            };
            infos.push(figure);
        }

        sendData(infos);
    }

    //Funktion, die die Daten an Datenbank schickt (sendData)

    async function sendData(_infos: Pic[]): Promise<void> {
        let width: string = canvas.width.toString();
        let height: string = canvas.height.toString();
        //falls noch änderbare HG-Farbe, dann hier definieren
        let canvasinfo: string[] = [width, height];
        let canvasjsn: string = JSON.stringify(canvasinfo);
        let canvasquery: URLSearchParams = new URLSearchParams(canvasjsn);

        let infos: string = JSON.stringify(_infos);
        let query: URLSearchParams = new URLSearchParams(infos);
        let response: Response = await fetch(url + "?" + query + "&" + canvasquery);

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

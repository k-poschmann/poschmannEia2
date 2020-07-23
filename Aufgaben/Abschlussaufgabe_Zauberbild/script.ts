namespace Zauberbild {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let canvasstar: HTMLCanvasElement;
    let canvasheart: HTMLCanvasElement;
    let canvasmoon: HTMLCanvasElement;
    let canvasflash: HTMLCanvasElement;

    let size1: HTMLInputElement;
    let size2: HTMLInputElement;
    let size3: HTMLInputElement;

    let id: string;

    export let cxt: CanvasRenderingContext2D;
    export let cxtstar: CanvasRenderingContext2D;
    export let cxtheart: CanvasRenderingContext2D;
    export let cxtmoon: CanvasRenderingContext2D;
    export let cxtflash: CanvasRenderingContext2D;

    //Array
    let symbols: SuperClass[] = [];

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("#maincanvas");
        canvasstar = <HTMLCanvasElement>document.querySelector("#canvasstar");
        canvasheart = <HTMLCanvasElement>document.querySelector("#canvasheart");
        canvasmoon = <HTMLCanvasElement>document.querySelector("#canvasmoon");
        canvasflash = <HTMLCanvasElement>document.querySelector("#canvasflash");

        canvas.addEventListener("click", drawSymbolOnCanvas);
        canvasstar.addEventListener("click", getID);
        canvasheart.addEventListener("click", getID);
        canvasmoon.addEventListener("click", getID);
        canvasflash.addEventListener("click", getID);

        size1 = <HTMLInputElement>document.querySelector("#sizeone");
        size2 = <HTMLInputElement>document.querySelector("#sizetwo");
        size3 = <HTMLInputElement>document.querySelector("#sizethree");
        let btnOK: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btnok");

        cxt = <CanvasRenderingContext2D>canvas.getContext("2d");
        cxtstar = <CanvasRenderingContext2D>canvasstar.getContext("2d");
        cxtheart = <CanvasRenderingContext2D>canvasheart.getContext("2d");
        cxtmoon = <CanvasRenderingContext2D>canvasmoon.getContext("2d");
        cxtflash = <CanvasRenderingContext2D>canvasflash.getContext("2d");

        btnOK.addEventListener("click", resizeCanvas);

        createSymbols();

    }



    // Leinwandgröße Ändern
    function resizeCanvas(_event: Event): void {
        console.log("Button OK wurde geklickt!");


        if (size1.checked == true) {
            canvas.width = 400;
            canvas.height = 400;
        }

        if (size2.checked == true) {
            canvas.width = 500;
            canvas.height = 300;
        }

        if (size3.checked == true) {
            canvas.width = 600;
            canvas.height = 400;
        }
    }


    function createSymbols(): void {
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let star: Star = new Star(position);
            star.draw(cxtstar);
            symbols.push(star);
            console.log("Sternchen ist hier!");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 0;
            let positionY: number = -10;
            let position: Vector = new Vector(positionX, positionY);
            let heart: Heart = new Heart(position);
            heart.draw(cxtheart);
            symbols.push(heart);
            console.log("Herzchen auch :)");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 5;
            let position: Vector = new Vector(positionX, positionY);
            let moon: Moon = new Moon(position);
            moon.draw(cxtmoon);
            console.log("Mond ebenfalls!");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 120;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let flash: Flash = new Flash(position);
            flash.draw(cxtflash);
            console.log("Blitz anwesend :D");
        }
    }


    //Abspeichern der ID der Symbole
    function getID(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        id = target.id;
        console.log(id);

    }

    //Symbole auf Canvas zeichnen
    function drawSymbolOnCanvas(_event: MouseEvent) {
        switch (id) {
            case "canvasstar":
                let StarX: number = _event.offsetX;
                let StarY: number = _event.offsetY;
                let StarPosition: Vector = new Vector(StarX, StarY);
                let star: Star = new Star(StarPosition);
                star.draw(cxt);
                symbols.push(star);
                break;

            case "canvasheart":
                let HeartX: number = _event.offsetX;
                let HeartY: number = _event.offsetY;
                let HeartPosition: Vector = new Vector(HeartX, HeartY);
                let heart: Heart = new Heart(HeartPosition);
                heart.draw(cxt);
                symbols.push(heart);
                break;
            case "canvasmoon":
                let MoonX: number = _event.offsetX;
                let MoonY: number = _event.offsetY;
                let MoonPosition: Vector = new Vector(MoonX, MoonY);
                let moon: Moon = new Moon(MoonPosition);
                moon.draw(cxt);
                symbols.push(moon);
                break;
            case "canvasflash":
                let FlashX: number = _event.offsetX;
                let FlashY: number = _event.offsetY;
                let FlashPosition: Vector = new Vector(FlashX, FlashY);
                let flash: Flash = new Flash(FlashPosition);
                flash.draw(cxt);
                symbols.push(flash);
                break;
        }
    }

}

namespace Zauberbild {
    window.addEventListener("load", handleLoad);

    export let canvas: HTMLCanvasElement;
    let canvasstar: HTMLCanvasElement;
    let canvasheart: HTMLCanvasElement;
    let canvasmoon: HTMLCanvasElement;
    let canvasflash: HTMLCanvasElement;
    let backgroundImage: ImageData;

    let rdbtn: HTMLDivElement;
    let btndelete: HTMLButtonElement;
    let btncolor: HTMLButtonElement;
    let btnsave: HTMLButtonElement;

    export let list: HTMLInputElement;


    export let cxt: CanvasRenderingContext2D;
    export let cxtstar: CanvasRenderingContext2D;
    export let cxtheart: CanvasRenderingContext2D;
    export let cxtmoon: CanvasRenderingContext2D;
    export let cxtflash: CanvasRenderingContext2D;

    //Array
    export let symbols: SuperClass[] = [];
    let colors: string[] = ["#FFC0CB", "#FF1493", "#E6E6FA", "#9370DB", "#4B0082", "#FA8072", "#DC143C", "#FF0000", "#FFA500", "#FFD700", "#FFFF00",
        "#FFE4B5", "#32CD32", "#90EE90", "#008000", "#66CDAA", "#48D1CC", "#B0C4DE", "#87CEFA", "#0000FF", "#DCDCDC", "#FFFAFA", "#F5F5DC"];

    let id: string;
    let coloring: string;

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

        list = <HTMLInputElement>document.querySelector("#album");

        rdbtn = <HTMLDivElement>document.querySelector("#radiobuttons");
        btndelete = <HTMLButtonElement>document.querySelector("#btndelete");
        btncolor = <HTMLButtonElement>document.querySelector("#btncolor");
        btnsave = <HTMLButtonElement>document.querySelector("#btnsave");

        cxt = <CanvasRenderingContext2D>canvas.getContext("2d");
        cxtstar = <CanvasRenderingContext2D>canvasstar.getContext("2d");
        cxtheart = <CanvasRenderingContext2D>canvasheart.getContext("2d");
        cxtmoon = <CanvasRenderingContext2D>canvasmoon.getContext("2d");
        cxtflash = <CanvasRenderingContext2D>canvasflash.getContext("2d");

        drawBackground();
        rdbtn.addEventListener("change", resizeCanvas);
        btndelete.addEventListener("click", deleteCanvas);
        btncolor.addEventListener("click", changeColor);
        btnsave.addEventListener("click", saveTitle);
        window.setInterval(animate, 20);
        createSymbols();

        findPicture();

    }



    // Leinwandgröße Ändern
    function resizeCanvas(_event: Event): void {
        //console.log("Change geklickt");
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        switch (id) {
            case "sizeone":
                cxt.canvas.width = 400;
                cxt.canvas.height = 400;
                drawBackground();
                break;
            case "sizetwo":
                cxt.canvas.width = 500;
                cxt.canvas.height = 300;
                drawBackground();
                break;
            case "sizethree":
                cxt.canvas.width = 600;
                cxt.canvas.height = 400;
                drawBackground();
                break;
        }
    }

    //Hintergrund wird gezeichnet
    function drawBackground(): void {
        let gradient: CanvasGradient = cxt.createLinearGradient(0, 120, 0, 200);
        gradient.addColorStop(0, "#143b39");
        gradient.addColorStop(1, "#5e1943");
        cxt.fillStyle = gradient;
        cxt.fillRect(0, 0, canvas.width, canvas.height);
        backgroundImage = cxt.getImageData(0, 0, canvas.width, canvas.height);
    }


    function createSymbols(): void {
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let star: Star = new Star(position);
            star.draw(cxtstar);
            // console.log("Sternchen ist hier!");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 0;
            let positionY: number = -10;
            let position: Vector = new Vector(positionX, positionY);
            let heart: Heart = new Heart(position);
            heart.draw(cxtheart);
            // console.log("Herzchen auch :)");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 20;
            let positionY: number = 5;
            let position: Vector = new Vector(positionX, positionY);
            let moon: Moon = new Moon(position);
            moon.draw(cxtmoon);
            // console.log("Mond ebenfalls!");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 120;
            let positionY: number = 15;
            let position: Vector = new Vector(positionX, positionY);
            let flash: Flash = new Flash(position);
            flash.draw(cxtflash);
            // console.log("Blitz anwesend :D");
        }
    }


    //Abspeichern der ID der Symbole
    function getID(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        id = target.id;
        console.log(id);

    }

    //Symbole auf Canvas zeichnen
    function drawSymbolOnCanvas(_event: MouseEvent): void {
        for (let symbol of symbols) {
            symbol.active = false;
        }

        switch (id) {
            case "canvasstar":
                let starx: number = _event.offsetX;
                let stary: number = _event.offsetY;
                let starposition: Vector = new Vector(starx, stary);
                let star: Star = new Star(starposition);
                star.draw(cxt);
                symbols.push(star);
                id = "";
                break;
            case "canvasheart":
                let heartx: number = _event.offsetX;
                let hearty: number = _event.offsetY;
                let heartposition: Vector = new Vector(heartx, hearty);
                let heart: Heart = new Heart(heartposition);
                heart.draw(cxt);
                symbols.push(heart);
                id = "";
                break;
            case "canvasmoon":
                let moonx: number = _event.offsetX;
                let moony: number = _event.offsetY;
                let moonposition: Vector = new Vector(moonx, moony);
                let moon: Moon = new Moon(moonposition);
                moon.draw(cxt);
                symbols.push(moon);
                id = "";
                break;
            case "canvasflash":
                let flashx: number = _event.offsetX;
                let flashy: number = _event.offsetY;
                let flashposition: Vector = new Vector(flashx, flashy);
                let flash: Flash = new Flash(flashposition);
                flash.draw(cxt);
                symbols.push(flash);
                id = "";
                break;
        }

    }

    //Animation Move
    function animate(): void {
        cxt.putImageData(backgroundImage, 0, 0);

        for (let index: number = 0; index < symbols.length; index++) {
            symbols[index].move(1 / 200);
            symbols[index].draw(cxt);
        }


    }

    // Canvas löschen
    function deleteCanvas(_event: MouseEvent): void {
        symbols = [];
    }

    // Farben ändern
    function randomColor(): void {
        coloring = colors[Math.floor(Math.random() * colors.length)];
    }

    function changeColor(_event: MouseEvent): void {
        for (let symbol of symbols) {
            if (symbol instanceof Star) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(cxt);
            }
        }

        for (let symbol of symbols) {
            if (symbol instanceof Heart) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(cxt);
            }
        }
        for (let symbol of symbols) {
            if (symbol instanceof Moon) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(cxt);
            }
        }
        for (let symbol of symbols) {
            if (symbol instanceof Flash) {
                randomColor();
                symbol.active = true;
                symbol.color = coloring;
                symbol.draw(cxt);
            }
        }
    }


    // Titel speichern / abfragen
    function saveTitle(): void {
        let picsName: string | null = prompt("Bitte einen eindeutigen Titel eingeben");
        if (picsName == "" || picsName == null) {
            alert("Bild kann nicht gespeichert werden");
        } else {
            savePic(picsName);
        }
    }

}


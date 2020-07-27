namespace Zauberbild {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let canvasstar: HTMLCanvasElement;
    let canvasheart: HTMLCanvasElement;
    let canvasmoon: HTMLCanvasElement;
    let canvasflash: HTMLCanvasElement;
    let backgroudnImage: ImageData;

    let size1: HTMLInputElement;
    let size2: HTMLInputElement;
    let size3: HTMLInputElement;

    let btnOK: HTMLButtonElement;
    let btndelete: HTMLButtonElement;
    let btncolor: HTMLButtonElement;


    export let cxt: CanvasRenderingContext2D;
    export let cxtstar: CanvasRenderingContext2D;
    export let cxtheart: CanvasRenderingContext2D;
    export let cxtmoon: CanvasRenderingContext2D;
    export let cxtflash: CanvasRenderingContext2D;

    //Array
    let symbols: SuperClass[] = [];
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

        size1 = <HTMLInputElement>document.querySelector("#sizeone");
        size2 = <HTMLInputElement>document.querySelector("#sizetwo");
        size3 = <HTMLInputElement>document.querySelector("#sizethree");
        btnOK = <HTMLButtonElement>document.querySelector("#btnok");

        btndelete = <HTMLButtonElement>document.querySelector("#btndelete");
        btncolor = <HTMLButtonElement>document.querySelector("#btncolor");

        cxt = <CanvasRenderingContext2D>canvas.getContext("2d");
        cxtstar = <CanvasRenderingContext2D>canvasstar.getContext("2d");
        cxtheart = <CanvasRenderingContext2D>canvasheart.getContext("2d");
        cxtmoon = <CanvasRenderingContext2D>canvasmoon.getContext("2d");
        cxtflash = <CanvasRenderingContext2D>canvasflash.getContext("2d");

        btnOK.addEventListener("click", resizeCanvas);
        btndelete.addEventListener("click", animation);
        btncolor.addEventListener("click", changeColor);
        window.setInterval(animate, 20);

        createSymbols();
        backgroudnImage = cxt.getImageData(0, 0, canvas.width, canvas.height);
    }



    // Leinwandgröße Ändern
    function resizeCanvas(_event: Event): void {
        // console.log("Button OK wurde geklickt!");


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
            //symbols.push(star);
            // console.log("Sternchen ist hier!");
        }
        for (let i: number = 0; i < 1; i++) {
            let positionX: number = 0;
            let positionY: number = -10;
            let position: Vector = new Vector(positionX, positionY);
            let heart: Heart = new Heart(position);
            heart.draw(cxtheart);
            //symbols.push(heart);
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

    //Das funktioniert teilweise :

    function animate(): void {
        cxt.putImageData(backgroudnImage, 0, 0);
        for (let figure of symbols) {
            if (figure.active == false) {
                figure.move(1 / 200);
                figure.draw(cxt);
            }
        }
    }

    // Das funktioniert nicht...

    function animation(_event: MouseEvent): void {
        // cxt.putImageData(backgroudnImage, 0, 0);
        let target: HTMLElement = <HTMLElement>_event.target;
        let id: string = target.id;

        for (let symbol of symbols) {
            switch (id) {
                case "btndelete":
                    deleteForm(symbol);
                    break;
                case "btnmove":
                    if (symbol.active == false) {
                        symbol.move(1 / 200);
                        symbol.draw(cxt);
                        console.log(symbol);
                    }
            }
        }
    }

    function deleteForm(_figure: SuperClass): void {
        for (let symbol of symbols) {
            if (symbol.active == false) {
                let index: number = symbols.indexOf(_figure, 0);
                symbols.splice(index, 1);

            }
            console.log(symbols);
        }
    }


    function randomColor(): void {
        coloring = colors[Math.floor(Math.random() * colors.length)];
    }

    function changeColor(_event: MouseEvent): void {
        randomColor();
        for (let symbol of symbols) {
            if (symbol.active == false) {
                symbol.color = coloring;
                symbol.draw(cxt);
            } else {
                symbol.active = true;
            }

            //console.log(symbol);
        }

    }



}

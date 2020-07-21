namespace Zauberbild {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let canvasstar: HTMLCanvasElement;
    let size1: HTMLInputElement;
    let size2: HTMLInputElement;
    let size3: HTMLInputElement;

    export let cxtstar: CanvasRenderingContext2D;
    //let cxtheart: CanvasRenderingContext2D;
    //let cxtmoon: CanvasRenderingContext2D;
    //let cxtsun: CanvasRenderingContext2D;

    //Array
    let symbols: string[] = [];

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("#maincanvas");
        canvasstar = <HTMLCanvasElement>document.querySelector("#canvasstar");
        size1 = <HTMLInputElement>document.querySelector("#sizeone");
        size2 = <HTMLInputElement>document.querySelector("#sizetwo");
        size3 = <HTMLInputElement>document.querySelector("#sizethree");
        let btnOK: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btnok");

        cxtstar = <CanvasRenderingContext2D>canvas.getContext("2d");
        // cxtheart = <CanvasRenderingContext2D>canvas.getContext("2d");
        // cxtmoon = <CanvasRenderingContext2D>canvas.getContext("2d");
        // cxtsun = <CanvasRenderingContext2D>canvas.getContext("2d");

        btnOK.addEventListener("click", resizeCanvas);

        createStar();
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

    function createStar(): void {
        // let number: number = 1;

        // for (let i: number = 0; i < number; i++) {
        //     let positionX: number = 110;
        //     let positionY: number = 200;

        //     let position: Vector = new Vector(0, 0);
        //     let star: Star = new Star(position);
        //     star.draw();
        //     symbols.push(star);
        // }
        let positionX: number = 0;
        let positionY: number = 0;
        let position: Vector = new Vector(positionX, positionY);
        let star: Star = new Star(position);
        star.draw(cxtstar);
        console.log("I'm here!");
    }


}
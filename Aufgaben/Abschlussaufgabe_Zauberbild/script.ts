namespace Zauberbild {
    window.addEventListener("load", handleLoad);

    let canvas: HTMLCanvasElement;
    let size1: HTMLInputElement;
    let size2: HTMLInputElement;
    let size3: HTMLInputElement;

    let ctx1: CanvasRenderingContext2D;

    function handleLoad(): void {
        canvas = <HTMLCanvasElement>document.querySelector("canvas");
        size1 = <HTMLInputElement>document.querySelector("#sizeone");
        size2 = <HTMLInputElement>document.querySelector("#sizetwo");
        size3 = <HTMLInputElement>document.querySelector("#sizethree");
        let btnOK: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btnok");

        ctx1 = <CanvasRenderingContext2D>canvas.getContext("2d");

        btnOK.addEventListener("click", resizeCanvas);
    }



    // Leinwandgröße Ändern
    function resizeCanvas(): void {
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

    
}
namespace Virus {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("resize", resizeWindow, false);
    window.addEventListener("load", handleLoad);
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");


    function resizeWindow(): void {
        let myWidth: number = window.innerWidth - 5;
        let myHeight: number = window.innerHeight - 5;
        crc2.canvas.width = myWidth;
        crc2.canvas.height = myHeight;

        drawBackground();

        crc2.fillRect(0, 0, myWidth, myHeight);

        console.log(myWidth, myHeight);
    }

    function handleLoad(_event: Event): void {
        resizeWindow();
        drawBackground();
        drawCells({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawCoronaVirus({ x: 0, y: 150 }, 30, 100);
        drawAntibody();

    }

    function drawBackground(): void {

        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");

        //Muster erstellen
        pattern.canvas.width = 60;
        pattern.canvas.height = 60;

        pattern.fillStyle = "#b3daff";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 20);
        pattern.lineTo(20, 0);
        pattern.lineTo(40, 0);
        pattern.lineTo(60, 20);
        pattern.lineTo(60, 40);
        pattern.lineTo(40, 60);
        pattern.lineTo(20, 60);
        pattern.lineTo(0, 40);
        pattern.lineTo(0, 20);

        //Zellmembranen einfärben und zeichnen
        pattern.strokeStyle = "#80bfff";
        pattern.stroke();
        pattern.closePath();

        //Zellkern zeichnen und einfärben 
        pattern.beginPath();
        pattern.arc(30, 30, 5, 0, 2 * Math.PI);
        pattern.fillStyle = "#80bfff";
        pattern.fill();


        crc2.fillStyle = <CanvasRenderingContext2D>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);

    }

    function drawCells(_position: Vector, _size: Vector): void {
        console.log("Zellen");

        crc2.beginPath();
        crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        crc2.fillStyle = "blue";
        crc2.strokeStyle = "yellow";
        crc2.fill();
        crc2.stroke();

        // Zellkern zeichnen
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 2 * Math.PI);
        crc2.fillStyle = "#80bfff";
        crc2.strokeStyle = "white";
        crc2.fill();
        crc2.stroke();

        for (let drawn: number = 0; drawn < canvas.width; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill();
            crc2.restore();
        }
        crc2.restore();


    }

    function drawCoronaVirus(_position: Vector, _min: number, _max: number): void {
        // let stepMin: number = 10;
        // let stepMax: number = 150;
        // let x: number = 0;
        let radiusVirus: number = 50;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusVirus);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(1, "red");

        crc2.beginPath();
        crc2.arc(200, 200, 60, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();

    }

    function drawAntibody(): void { 
        let radiusAntibody: number = 50;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusAntibody);
        gradient.addColorStop(0, "red");
        gradient.addColorStop(1, "white");

        crc2.beginPath();
        crc2.arc(300, 400, 60, 0, 2 * Math.PI);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.closePath();
    }

}

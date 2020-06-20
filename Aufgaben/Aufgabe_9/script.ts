namespace Virus_Classes {

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;


    let coronaCells: Corona[] = [];
    let antibodyCells: Antibody[] = [];
    let particleCells: Particle[] = [];


    let backgroudnImage: ImageData;
    // Variable ImageData deklarieren <-- UNBEDINGT MACHEN!!!!

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground();
        let p: Vector = new Vector(150, 375);
        drawCells(p);
        drawCoronaVirus(10);
        drawAntibody(10);
        //drawParticle({ x: 130, y: 490 });

        window.setInterval(animation, 20);
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

    // ----- MENSCHLICHE ZELLEN WERDEN ERSTELLT ---- \\

    function createCells(_position: Vector): void {
        // Mit Math.random werden zufällige Positionen erzeugt
        let x: number = 60 * Math.random() + 10;
        let y: number = 50 * Math.random() + 10;
        // Koordinatensystem wird verschoben
        crc2.translate(_position.x, _position.y);

        // Zelle wird erstellt
        crc2.beginPath();
        crc2.ellipse(100, 50, x, y, 5, 90, 10, true);
        crc2.strokeStyle = "#6666ff";
        crc2.fillStyle = "#9999ff";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();

        //Zellkern wird erstellt
        crc2.beginPath();
        crc2.arc(100, 60, 7, 0, 2 * Math.PI);
        crc2.fillStyle = "#9999ff";
        crc2.strokeStyle = "#fff";
        crc2.fill();
        crc2.stroke();
    }



    function drawCells(_size: Vector): void {
        // For Schleife generiert die zu platzierende Zellen
        // Mit Math.random werden zufällige größen erstellt
        let nCells: number = 5;
        for (let drawn: number = 0; drawn < nCells; drawn++) {
            crc2.save();
            let x: number = (Math.random()) * _size.x;
            let y: number = ((Math.random()) * _size.y);
            let z: Vector = new Vector(x, y);
            // FKT. zeichnet erstellte Zellen auf die Canvas
            createCells(z);
            crc2.restore();
        }

        backgroudnImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }


    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\

    function drawCoronaVirus(_nCorona: number): void {

        for (let i: number = 0; i < _nCorona; i++) {
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let corona: Corona = new Corona(postion);
            corona.draw();
            coronaCells.push(corona);
        }

        // console.log(coronaCells);
    }

    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\

    function drawAntibody(_nAntibody: number): void {
        for (let i: number = 0; i < _nAntibody; i++) {
            let antibody: Antibody = new Antibody();
            antibodyCells.push(antibody);
        }
    }


    // ------ ANIMATION ------ \\

    function animation(): void {
        crc2.putImageData(backgroudnImage, 0, 0);
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        for (let corona of coronaCells) {
            corona.move(1 / 200);
            corona.draw();
        }

        for (let antibody of antibodyCells) {
            antibody.move(1 / 50);
            antibody.draw();
        }

    }
}

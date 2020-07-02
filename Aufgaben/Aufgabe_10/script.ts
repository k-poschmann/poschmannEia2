namespace Virus_Inheritance {

    window.addEventListener("load", handleLoad);
    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;

    let moveableAr: Moveable[] = [];

    export let bodycellsAR: BodyCell[] = []; 
    export let antibodyCells: Antibody[] = [];
    // let particleCells: Particle[] = [];


    let backgroudnImage: ImageData;
    // Variable ImageData deklarieren <-- UNBEDINGT MACHEN!!!!

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");


        drawBackground();
        drawCells(5);
        drawCoronaVirus(10);
        drawAntibody(10);
        drawParticle(80);

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

        backgroudnImage = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    

    // ----- MENSCHLICHE ZELLEN WERDEN ERSTELLT ---- \\

    function drawCells(_nBodyCells: number): void {
        for (let drawn: number = 0; drawn < _nBodyCells; drawn++) {
            let positionX: number = 60 * Math.random() + 10;
            let positionY: number = 50 * Math.random() + 10;
            let position: Vector = new Vector(positionX, positionY);
            let bodycells: BodyCell = new BodyCell(position);
            bodycells.draw();
            bodycellsAR.push(bodycells);
        }
    }


    // ---- CORONA VIREN WERDEN ERSTELLT ---- \\

    function drawCoronaVirus(_nCorona: number): void {

        for (let i: number = 0; i < _nCorona; i++) {
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let corona: Corona = new Corona(postion);
            corona.draw();
            moveableAr.push(corona);

            console.log(corona);
        }

    }

    // ---- ANTIKÖRPER WERDEN ERSTELLT ---- \\

    function drawAntibody(_nAntibody: number): void {
        for (let i: number = 0; i < _nAntibody; i++) {
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let antibody: Antibody = new Antibody(postion);
            antibody.draw();
            antibodyCells.push(antibody);
        }
    }

    // ---- Partikel WERDEN ERSTELLT ---- \\

    function drawParticle(_nParticle: number): void {
        for (let drawn: number = 0; drawn < _nParticle; drawn++) {
            crc2.save();
            let positionX: number = Math.random() * canvas.width;
            let positionY: number = Math.random() * canvas.height;
            let postion: Vector = new Vector(positionX, positionY);
            let particle: Particle = new Particle(postion);
            particle.draw();
            moveableAr.push(particle);
            console.log(particle);


        }
    }

    // ------ ANIMATION ------ \\

    function animation(): void {
        crc2.putImageData(backgroudnImage, 0, 0);

        for (let bodycell of bodycellsAR) {
            bodycell.draw();
        }

        for (let corona of moveableAr) {
            corona.move(1 / 200);
            corona.draw();
        }

        for (let antibody of antibodyCells) {
            // antibody.move(1 / 500);
            antibody.draw();
        }

        for (let particle of moveableAr) {
            particle.move(1 / 100);
            particle.draw();
        }

    }
}

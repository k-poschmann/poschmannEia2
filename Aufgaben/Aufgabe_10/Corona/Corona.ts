namespace Virus_Inheritance {
    export class Corona extends Moveable {

        constructor(_position: Vector) {
            super(_position);
            this.velocity.random(30, 80);
        }

        draw(): void {
            let r1: number = 5;
            let r2: number = 10;
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "red");
            gradient.addColorStop(1, "orange");


            crc2.beginPath();
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fillStyle = gradient;
            crc2.strokeStyle = "orange";
            crc2.stroke();
            crc2.fill();
            crc2.closePath();
            crc2.restore();
            // console.log(this.position.x, this.position.y);
        }

        //babla
        move(_timeslice: number): void {

            super.move(_timeslice);
            // let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            // offset.scale(_timeslice);
            // this.position.add(offset);

            // if (this.position.x < 0)
            //     this.position.x += crc2.canvas.width;
            // if (this.position.y < 0)
            //     this.position.y += crc2.canvas.height;
            // if (this.position.x > crc2.canvas.width)
            //     this.position.x -= crc2.canvas.width;
            // if (this.position.y > crc2.canvas.height)
            //     this.position.y -= crc2.canvas.height;
        }

        // infects(): boolean {
        //     if ()
        //     let hitsize: number = 50 * this.size;
        //     let difference: Vector = new Vector(_hotspot.x - this.position.x, _hotspot.y - this.position.y);
        //     return (Math.abs(difference.x) < hitsize && Math.abs(difference.y) < hitsize);
        // }
    }
}
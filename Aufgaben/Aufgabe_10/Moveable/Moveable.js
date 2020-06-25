"use strict";
var Virus_Inheritance;
(function (Virus_Inheritance) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Inheritance.Vector(0, 0);
            this.velocity = new Virus_Inheritance.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        move(_timeslice) {
            let offset = new Virus_Inheritance.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Virus_Inheritance.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Virus_Inheritance.crc2.canvas.height;
            if (this.position.x > Virus_Inheritance.crc2.canvas.width)
                this.position.x -= Virus_Inheritance.crc2.canvas.width;
            if (this.position.y > Virus_Inheritance.crc2.canvas.height)
                this.position.y -= Virus_Inheritance.crc2.canvas.height;
        }
        draw() {
            // Hiii
        }
    }
    Virus_Inheritance.Moveable = Moveable;
})(Virus_Inheritance || (Virus_Inheritance = {}));
//# sourceMappingURL=Moveable.js.map
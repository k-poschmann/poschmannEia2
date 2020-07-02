"use strict";
var Virus_Advanced;
(function (Virus_Advanced) {
    class Moveable {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Virus_Advanced.Vector(0, 0);
            this.velocity = new Virus_Advanced.Vector(0, 0);
            this.velocity.random(50, 100);
        }
        move(_timeslice) {
            let offset = new Virus_Advanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Virus_Advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Virus_Advanced.crc2.canvas.height;
            if (this.position.x > Virus_Advanced.crc2.canvas.width)
                this.position.x -= Virus_Advanced.crc2.canvas.width;
            if (this.position.y > Virus_Advanced.crc2.canvas.height)
                this.position.y -= Virus_Advanced.crc2.canvas.height;
        }
        draw() {
            // Hiii
        }
    }
    Virus_Advanced.Moveable = Moveable;
})(Virus_Advanced || (Virus_Advanced = {}));
//# sourceMappingURL=Moveable.js.map
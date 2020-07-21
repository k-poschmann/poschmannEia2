"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Flash {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zauberbild.Vector(0, 0);
        }
        draw() {
            Zauberbild.cxtflash.save();
            Zauberbild.cxtflash.translate(this.position.x, this.position.y);
            Zauberbild.cxtflash.scale(1.8, 0.7);
            Zauberbild.cxtflash.fillStyle = "black";
            Zauberbild.cxtflash.beginPath();
            Zauberbild.cxtflash.lineTo(0, -10);
            Zauberbild.cxtflash.lineTo(60, 30);
            Zauberbild.cxtflash.lineTo(30, 60);
            Zauberbild.cxtflash.lineTo(50, 85);
            Zauberbild.cxtflash.lineTo(20, 120);
            Zauberbild.cxtflash.lineTo(35, 140);
            Zauberbild.cxtflash.lineTo(-10, 180);
            Zauberbild.cxtflash.lineTo(0, 140);
            Zauberbild.cxtflash.lineTo(-15, 120);
            Zauberbild.cxtflash.lineTo(5, 90);
            Zauberbild.cxtflash.lineTo(-20, 60);
            Zauberbild.cxtflash.lineTo(0, -10);
            Zauberbild.cxtflash.fill();
        }
    }
    Zauberbild.Flash = Flash;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Flash.js.map
"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Moon {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zauberbild.Vector(0, 0);
        }
        draw() {
            Zauberbild.cxtmoon.save();
            Zauberbild.cxtmoon.scale(1, 1.2);
            Zauberbild.cxtmoon.translate(this.position.x, this.position.y);
            Zauberbild.cxtmoon.fillStyle = "#d629b1";
            Zauberbild.cxtmoon.lineWidth = 5;
            Zauberbild.cxtmoon.beginPath();
            Zauberbild.cxtmoon.bezierCurveTo(170, 0, -100, 60, 170, 110);
            Zauberbild.cxtmoon.bezierCurveTo(170, 100, 90, 70, 170, 0);
            Zauberbild.cxtmoon.fill();
        }
    }
    Zauberbild.Moon = Moon;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Moon.js.map
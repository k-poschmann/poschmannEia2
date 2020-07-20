"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Star {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zauberbild.Vector(0, 0);
        }
        draw() {
            Zauberbild.cxtstar.beginPath();
            Zauberbild.cxtstar.save();
            Zauberbild.cxtstar.translate(this.position.x, this.position.y);
            Zauberbild.cxtstar.moveTo(108, 0.0);
            Zauberbild.cxtstar.lineTo(141, 70);
            Zauberbild.cxtstar.lineTo(218, 78.3);
            Zauberbild.cxtstar.lineTo(162, 131);
            Zauberbild.cxtstar.lineTo(175, 205);
            Zauberbild.cxtstar.lineTo(108, 170);
            Zauberbild.cxtstar.lineTo(41.2, 205);
            Zauberbild.cxtstar.lineTo(55, 131);
            Zauberbild.cxtstar.lineTo(1, 78);
            Zauberbild.cxtstar.lineTo(75, 68);
            Zauberbild.cxtstar.lineTo(108, 0);
            Zauberbild.cxtstar.closePath();
            Zauberbild.cxtstar.strokeStyle = "orange";
            Zauberbild.cxtstar.stroke();
        }
    }
    Zauberbild.Star = Star;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map
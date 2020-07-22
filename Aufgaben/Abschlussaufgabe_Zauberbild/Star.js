"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Star extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
            if (_position)
                this.position = _position.copy();
        }
        draw() {
            Zauberbild.cxtstar.beginPath();
            Zauberbild.cxtstar.save();
            Zauberbild.cxtstar.translate(this.position.x, this.position.y);
            Zauberbild.cxtstar.scale(1.2, 0.6);
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
            Zauberbild.cxtstar.fillStyle = "yellow";
            Zauberbild.cxtstar.fill();
        }
    }
    Zauberbild.Star = Star;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map
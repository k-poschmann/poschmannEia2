"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Star extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
            this.color = "yellow";
        }
        draw(context) {
            context.beginPath();
            context.save();
            context.translate(this.position.x, this.position.y);
            Zauberbild.cxtstar.scale(1.2, 0.6);
            Zauberbild.cxt.scale(0.4, 0.4);
            context.moveTo(108, 0.0);
            context.lineTo(141, 70);
            context.lineTo(218, 78.3);
            context.lineTo(162, 131);
            context.lineTo(175, 205);
            context.lineTo(108, 170);
            context.lineTo(41.2, 205);
            context.lineTo(55, 131);
            context.lineTo(1, 78);
            context.lineTo(75, 68);
            context.lineTo(108, 0);
            context.closePath();
            context.fillStyle = this.color;
            context.fill();
            context.restore();
        }
        changeColor(_color) {
            super.changeColor(_color);
        }
        move(_timeslice) {
            super.move(_timeslice);
        }
    }
    Zauberbild.Star = Star;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map
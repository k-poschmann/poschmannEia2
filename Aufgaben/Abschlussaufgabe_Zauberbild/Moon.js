"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Moon extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
        }
        draw(context) {
            context.save();
            context.scale(1, 1.2);
            // cxt.scale(0.4, 0.4);
            context.translate(this.position.x, this.position.y);
            context.fillStyle = "#d629b1";
            //context.lineWidth = 5;
            context.beginPath();
            context.bezierCurveTo(170, 0, -100, 60, 170, 110);
            context.bezierCurveTo(170, 100, 90, 70, 170, 0);
            context.fill();
            context.restore();
        }
    }
    Zauberbild.Moon = Moon;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Moon.js.map
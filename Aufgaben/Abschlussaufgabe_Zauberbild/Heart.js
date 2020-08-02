"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Heart extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
            this.active = false;
            this.rotation = 2;
            this.color = "red";
        }
        draw(context) {
            context.save();
            Zauberbild.cxtheart.scale(2, 1.2);
            Zauberbild.cxt.scale(0.5, 0.6);
            context.translate(this.position.x, this.position.y);
            context.fillStyle = this.color;
            Zauberbild.cxt.translate(-20, -100);
            Zauberbild.cxt.rotate(Math.PI / 180 * (this.rotation += 2));
            context.beginPath();
            context.moveTo(75, 40);
            context.bezierCurveTo(75, 37, 70, 25, 50, 25);
            context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            context.bezierCurveTo(20, 80, 40, 102, 75, 120);
            context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            context.bezierCurveTo(85, 25, 75, 37, 75, 40);
            if (this.active == true) {
                context.strokeStyle = "blue";
                context.lineWidth = 5;
                context.stroke();
            }
            context.fill();
            context.restore();
        }
        changeColor(_color) {
            super.changeColor(_color);
        }
        move(_timeslice) {
            super.move(_timeslice);
            // this.rotation = 3;
        }
    }
    Zauberbild.Heart = Heart;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Heart.js.map
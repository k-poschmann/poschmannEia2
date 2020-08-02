"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Star extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
            this.active = false;
            this.rotation = 0;
            this.color = "yellow";
        }
        draw(context) {
            context.beginPath();
            context.save();
            context.translate(this.position.x, this.position.y);
            Zauberbild.cxtstar.scale(1.2, 0.6);
            Zauberbild.cxt.scale(0.4, 0.4);
            Zauberbild.cxt.translate(-20, -100);
            Zauberbild.cxt.rotate(Math.PI / 180 * (this.rotation += 2));
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
            if (this.active == true) {
                context.strokeStyle = "red";
                context.lineWidth = 5;
                context.stroke();
            }
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
            // this.rotation = 3;
        }
    }
    Zauberbild.Star = Star;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Star.js.map
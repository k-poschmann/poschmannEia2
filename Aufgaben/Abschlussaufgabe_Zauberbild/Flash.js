"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Flash extends Zauberbild.SuperClass {
        constructor(_position) {
            super(_position);
        }
        draw(context) {
            context.save();
            context.translate(this.position.x, this.position.y);
            Zauberbild.cxtflash.scale(1.8, 0.7);
            context.fillStyle = "black";
            context.beginPath();
            context.lineTo(0, -10);
            context.lineTo(60, 30);
            context.lineTo(30, 60);
            context.lineTo(50, 85);
            context.lineTo(20, 120);
            context.lineTo(35, 140);
            context.lineTo(-10, 180);
            context.lineTo(0, 140);
            context.lineTo(-15, 120);
            context.lineTo(5, 90);
            context.lineTo(-20, 60);
            context.lineTo(0, -10);
            context.fill();
        }
    }
    Zauberbild.Flash = Flash;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Flash.js.map
"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Heart {
        constructor(_position) {
            if (_position)
                this.position = _position;
            else
                this.position = new Zauberbild.Vector(0, 0);
        }
        draw() {
            Zauberbild.cxtheart.save();
            Zauberbild.cxtheart.scale(2, 1.2);
            Zauberbild.cxtheart.translate(this.position.x, this.position.y);
            Zauberbild.cxtheart.fillStyle = "red";
            Zauberbild.cxtheart.beginPath();
            Zauberbild.cxtheart.moveTo(75, 40);
            Zauberbild.cxtheart.bezierCurveTo(75, 37, 70, 25, 50, 25);
            Zauberbild.cxtheart.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
            Zauberbild.cxtheart.bezierCurveTo(20, 80, 40, 102, 75, 120);
            Zauberbild.cxtheart.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
            Zauberbild.cxtheart.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
            Zauberbild.cxtheart.bezierCurveTo(85, 25, 75, 37, 75, 40);
            Zauberbild.cxtheart.fill();
        }
    }
    Zauberbild.Heart = Heart;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Heart.js.map
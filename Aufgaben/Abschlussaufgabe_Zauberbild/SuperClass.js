"use strict";
var Zauberbild;
(function (Zauberbild) {
    class SuperClass {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.color = "green";
            this.velocity = new Zauberbild.Vector(0, 0);
            this.velocity.random(100, 200);
            //this.radius = new Vector(0, 0);
        }
        changeColor(_color) {
            this.color = _color;
        }
        move(_timeslice) {
            let offset = new Zauberbild.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Zauberbild.cxt.canvas.width;
            if (this.position.y < 0)
                this.position.y += Zauberbild.cxt.canvas.height;
            if (this.position.x > Zauberbild.cxt.canvas.width)
                this.position.x -= Zauberbild.cxt.canvas.width;
            if (this.position.y > Zauberbild.cxt.canvas.height)
                this.position.y -= Zauberbild.cxt.canvas.height;
        }
    }
    Zauberbild.SuperClass = SuperClass;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=SuperClass.js.map
"use strict";
var Zauberbild;
(function (Zauberbild) {
    class SuperClass {
        constructor(_position) {
            if (_position)
                this.position = _position.copy();
            this.active = true;
            this.color = "green";
        }
        changeColor(_color) {
            this.color = _color;
        }
        rotate(_factor) {
            this.rotation = _factor;
        }
    }
    Zauberbild.SuperClass = SuperClass;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=SuperClass.js.map
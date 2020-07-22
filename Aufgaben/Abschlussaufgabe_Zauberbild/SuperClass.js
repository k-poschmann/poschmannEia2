"use strict";
var Zauberbild;
(function (Zauberbild) {
    class SuperClass {
        constructor(_position) {
            this.color = ["blue", "red", "green"];
            if (_position)
                this.position = _position.copy();
        }
    }
    Zauberbild.SuperClass = SuperClass;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=SuperClass.js.map
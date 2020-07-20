"use strict";
var Zauberbild;
(function (Zauberbild) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
    }
    Zauberbild.Vector = Vector;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=Vector.js.map
"use strict";
var Zauberbild;
(function (Zauberbild) {
    class SuperClass {
        //type: string;
        constructor(_position) {
            this.active = true;
            if (_position)
                this.position = _position.copy();
            // if (this.active == true) {
            //     console.log("This is true");
            // }
        }
        changeColor(_color) {
            this.color = _color;
        }
    }
    Zauberbild.SuperClass = SuperClass;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=SuperClass.js.map
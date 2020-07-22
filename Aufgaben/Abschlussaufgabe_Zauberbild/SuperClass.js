"use strict";
var Zauberbild;
(function (Zauberbild) {
    class SuperClass {
        //type: string;
        constructor(_position) {
            this.color = ["blue", "red", "green"];
            if (_position)
                this.position = _position.copy();
            if (this.active == true) {
                console.log("clicked");
            }
        }
    }
    Zauberbild.SuperClass = SuperClass;
})(Zauberbild || (Zauberbild = {}));
//# sourceMappingURL=SuperClass.js.map
"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Hallo");
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseLetter);
    }
    function chooseLetter(_event) {
        //console.log(_event);
        chosenCharacter = _event.key;
    }
    function placeLetter(_event) {
        //console.log(_event);
        let x = _event.offsetX;
        let y = _event.offsetY;
        let mail = _event.target;
        if (_event.target == _event.currentTarget) {
            let letter = document.createElement("span");
            mail.appendChild(letter);
            letter.textContent = chosenCharacter;
            letter.style.left = x + "px";
            letter.style.top = y + "px";
            letter.addEventListener("click", deleteLetter);
        }
        _event.stopPropagation();
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=blackmailer.js.map
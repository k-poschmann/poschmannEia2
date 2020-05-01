"use strict";
var Sequenzmemorie;
(function (Sequenzmemorie) {
    window.addEventListener("load", function () {
        let selectedWrd = document.querySelector("#options");
        let writtenWrd = document.querySelector("#ownsequence");
        let playground = document.querySelector("#playground");
        let enterbtn = document.querySelector("#enter");
        enterbtn.addEventListener("click", enter);
        function enter() {
            let inputMixed = [];
            if (selectedWrd.value != "") {
                let shuffled = selectedWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);
                playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
                console.log(playground);
            }
            else if (selectedWrd.value == "") {
                let shuffled = writtenWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
                inputMixed.push(shuffled);
                playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
                console.log(playground);
            }
        }
        //Funktion 'Enter' Ende
        function hint(_event) {
            if (_event.keyCode == 83) {
                //dann zeige alle Buchstaben mit klasse .letters
            }
            else {
                // dann gebe den Buchstaben die Klasse .hide
            }
        }
    });
})(Sequenzmemorie || (Sequenzmemorie = {}));
//# sourceMappingURL=script.js.map
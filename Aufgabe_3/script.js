"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    // Die Variablen werden typisiert und deklariert
    let totalCost = 0;
    let form = document.querySelector("div#form");
    let selectshopping = document.querySelector("#selectshopping");
    let selecthelp = document.querySelector("#selecthelp");
    let selectmoney = document.querySelector("#selectmoney");
    let confirm = document.querySelector("#confirm");
    let einkauf = document.querySelector("#einkauf");
    let hilfe = document.querySelector("#hilfe");
    let geld = document.querySelector("#geld");
    let bezahlung = document.querySelector("#bezahlung");
    let btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let btn3 = document.querySelector("#btn3");
    let btn4 = document.querySelector("#btn4");
    let totalprice = document.querySelector("#totalprice");
    function handleLoad(_event) {
        //console.log("Start");
        // Event-Listener werden auf alle Buttons gesetzt
        confirm.addEventListener("click", handleChange);
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn3.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);
    }
    function handleChange(_event) {
        //selektieren des Elements, wo am Ende alles 'reinkommt'
        let list = document.querySelector("#list");
        //Erstellen des FormData Elements
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let select = "[value='" + entry[1] + "']";
            let item = document.querySelector(select);
            let price = Number(item.getAttribute("price"));
            console.log(price);
            //list.innerHTML += item.value + " " + price + "  €  <br>" ;
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=script.js.map
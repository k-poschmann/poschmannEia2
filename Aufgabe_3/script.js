"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", handleLoad);
    // Die Variablen werden typisiert und deklariert
    let totalCost = 0;
    let form = document.querySelector("form");
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
        //confirm.addEventListener("click", handleChange);
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
            let selector = "[value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let containershopping = document.createElement("div");
            let containerplace = document.createElement("div");
            let toDocontainer = document.createElement("div");
            let moneycontainer = document.createElement("div");
            let cashcontainer = document.createElement("div");
            let deletebtn = document.createElement("button");
            switch (entry[0]) {
                case "Auswahl":
                case "Menge":
                    break;
                case "Items":
                    let itemPrice = Number(item.getAttribute("price"));
                    let menge = Number(formData.get("Menge"));
                    let market = String(formData.get("maerkte"));
                    itemPrice = menge * itemPrice;
                    let gesamt = itemPrice;
                    containershopping.innerHTML = "<h4>Einkauf</h4>" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                    list.appendChild(containershopping);
                    totalCost += itemPrice;
                    form.reset();
                    break;
                case "toDo":
                    let price = Number(item.getAttribute("price"));
                    toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                    list.appendChild(toDocontainer);
                    totalCost += price;
                    form.reset();
                    break;
                case "money":
                    let geld = Number(formData.get("money"));
                    moneycontainer.innerHTML = "<h4>Geld abheben</h4>" + geld + " €";
                    list.appendChild(moneycontainer);
                    form.reset();
                    break;
                case "cash":
                    let cash = String(item.getAttribute("value"));
                    cashcontainer.innerHTML = "" + cash;
                    list.appendChild(cashcontainer);
            }
        }
    }
    function displayAmount(_event) {
        let progress = document.querySelector("progress");
        let amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=script.js.map
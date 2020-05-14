"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    window.addEventListener("load", function () {
        let totalCost = 0;
        let form = document.querySelector("form");
        let selectshopping = document.querySelector("#selectshopping");
        let selecthelp = document.querySelector("#selecthelp");
        let selectmoney = document.querySelector("#selectmoney");
        let confirm = document.querySelector("#confirm");
        let deletebtn = document.querySelector("#delete");
        let totalprice = document.querySelector("#totalprice");
        let bar = document.querySelector("#bar");
        let paypal = document.querySelector("#paypal");
        let ueberweisung = document.querySelector("#ueberweisung");
        //console.log("Start");
        let btn1 = document.querySelector("#btn1");
        let btn2 = document.querySelector("#btn2");
        let btn3 = document.querySelector("#btn3");
        let btn4 = document.querySelector("#btn4");
        Haushaltshilfe.generateContent(Haushaltshilfe.data);
        // Event-Listener werden auf alle Buttons gesetzt
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn3.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);
        //deletebtn.addEventListener("click", deleteList);
        function handleChange() {
            //selektieren des Elements, wo am Ende alles 'reinkommt'
            let list = document.querySelector("#list");
            //Erstellen des FormData Elements
            let formData = new FormData(document.forms[0]);
            for (let entry of formData) {
                let selector = "[value='" + entry[1] + "']";
                let item = document.querySelector(selector);
                let containershopping = document.createElement("div");
                let toDocontainer = document.createElement("div");
                let moneycontainer = document.createElement("div");
                let cashcontainer = document.createElement("div");
                switch (entry[0]) {
                    case "Menge":
                        break;
                    case "einkauf":
                        let itemPrice = Number(item.getAttribute("price"));
                        let menge = Number(formData.get("Menge"));
                        let market = String(formData.get("Ort"));
                        itemPrice = menge * itemPrice;
                        let gesamt = itemPrice;
                        containershopping.innerHTML = "" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                        list.appendChild(containershopping);
                        totalCost += itemPrice;
                        form.reset();
                        break;
                    case "hilfe":
                        let price = Number(item.getAttribute("price"));
                        toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                        list.appendChild(toDocontainer);
                        totalCost += price;
                        form.reset();
                        break;
                    case "money":
                        let geld = Number(formData.get("Money"));
                        moneycontainer.innerHTML = "<h4>Geld abheben</h4>" + geld + " €";
                        list.appendChild(moneycontainer);
                        totalCost += geld;
                        form.reset();
                        break;
                    case "bezahlung":
                        if (bar.value == "checked") {
                            cashcontainer.innerHTML = "" + bar.value;
                        }
                        else if (paypal.value == "checked") {
                            cashcontainer.innerHTML = "" + paypal.value;
                        }
                        else {
                            cashcontainer.innerHTML = "" + ueberweisung.value;
                        }
                        //cashcontainer.innerHTML = "" + zahlungsart;
                        list.appendChild(cashcontainer);
                        form.reset();
                        break;
                }
                console.log(entry[1]);
                totalprice.innerHTML = "GESAMT: " + totalCost.toFixed(2) + " €";
                list.appendChild(totalprice);
            }
        }
    });
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=main.js.map
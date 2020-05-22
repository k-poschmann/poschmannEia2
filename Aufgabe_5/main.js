"use strict";
var Haushaltshilfe5;
(function (Haushaltshilfe5) {
    window.addEventListener("load", async function () {
        let totalCost = 0;
        let form = document.querySelector("form");
        // let selectshopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectshopping");
        // let selecthelp: HTMLInputElement = <HTMLInputElement>document.querySelector("#selecthelp");
        // let selectmoney: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectmoney");
        // let confirm: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#confirm");
        let deletebtn = document.querySelector("button[type=reset]");
        let totalprice = document.querySelector("#totalprice");
        let submit = document.querySelector("button#submit");
        // let bar: HTMLInputElement = <HTMLInputElement>document.querySelector("#bar");
        // let paypal: HTMLInputElement = <HTMLInputElement>document.querySelector("#paypal");
        // let ueberweisung: HTMLInputElement = <HTMLInputElement>document.querySelector("#ueberweisung");
        //console.log("Start");
        let btn1 = document.querySelector("#btn1");
        let btn2 = document.querySelector("#btn2");
        let btn3 = document.querySelector("#btn3");
        let btn4 = document.querySelector("#btn4");
        let response = await fetch("Data.json");
        let offer = await response.text();
        let data = JSON.parse(offer);
        Haushaltshilfe5.generateContent(data);
        // Event-Listener werden auf alle Buttons gesetzt
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn3.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);
        submit.addEventListener("click", sendOrder);
        deletebtn.addEventListener("click", deleteList);
        async function sendOrder(_event) {
            console.log("send order");
            let formData = new FormData(form);
            let query = new URLSearchParams(formData);
            await fetch("DataStructure.html?" + query.toString());
            alert("Order sent!");
        }
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
                let cashcontainer = document.createElement("div");
                switch (entry[0]) {
                    case "Menge":
                        break;
                    case "einkauf":
                        let itemPrice = Number(item.getAttribute("price"));
                        let menge = Number(formData.get("Menge"));
                        let market = String(formData.get("Ort"));
                        itemPrice = menge * itemPrice;
                        containershopping.innerHTML = "" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                        list.appendChild(containershopping);
                        totalCost += itemPrice;
                        console.log(market);
                        form.reset();
                        break;
                    case "hilfe":
                        let price = Number(item.getAttribute("price"));
                        toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                        list.appendChild(toDocontainer);
                        totalCost += price;
                        form.reset();
                        break;
                    case "bezahlung":
                        let paypal = document.getElementById("Paypal");
                        let bar = document.getElementById("Bar");
                        let zahlungsart;
                        if (bar.checked == true) {
                            zahlungsart = "Bar";
                            cashcontainer.innerHTML = zahlungsart + " bezahlen";
                        }
                        else if (paypal.checked == true) {
                            zahlungsart = "Paypal";
                            cashcontainer.innerHTML = "Mit " + zahlungsart + " zahlen";
                        }
                        else {
                            zahlungsart = "Überweisung";
                            cashcontainer.innerHTML = "Per " + zahlungsart + " bezahlen";
                        }
                        //cashcontainer.innerHTML = "" + zahlungsart;
                        list.appendChild(cashcontainer);
                        form.reset();
                        break;
                }
                totalprice.innerHTML = "GESAMT: " + totalCost.toFixed(2) + " €";
                list.appendChild(totalprice);
            }
        }
        function deleteList(_event) {
            let mainlist = document.querySelector("div#list");
            mainlist.innerHTML = "";
        }
    });
})(Haushaltshilfe5 || (Haushaltshilfe5 = {}));
//# sourceMappingURL=main.js.map
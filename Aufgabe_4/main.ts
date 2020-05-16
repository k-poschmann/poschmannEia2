namespace Haushaltshilfe {
    window.addEventListener("load", function () {
        let totalCost: number = 0;
        let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
        let selectshopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectshopping");
        let selecthelp: HTMLInputElement = <HTMLInputElement>document.querySelector("#selecthelp");
        let selectmoney: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectmoney");
        let confirm: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#confirm");
        let deletebtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete");
        let totalprice: HTMLLabelElement = <HTMLLabelElement>document.querySelector("#totalprice");

        let bar: HTMLInputElement = <HTMLInputElement>document.querySelector("#bar");
        let paypal: HTMLInputElement = <HTMLInputElement>document.querySelector("#paypal");
        let ueberweisung: HTMLInputElement = <HTMLInputElement>document.querySelector("#ueberweisung");




        //console.log("Start");
        let btn1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn1");
        let btn2: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn2");
        let btn3: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn3");
        let btn4: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn4");

        generateContent(data);

        // Event-Listener werden auf alle Buttons gesetzt
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn3.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);
        deletebtn.addEventListener("click", deleteList);





        function handleChange(): void {

            //selektieren des Elements, wo am Ende alles 'reinkommt'
            let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");

            //Erstellen des FormData Elements
            let formData: FormData = new FormData(document.forms[0]);
            for (let entry of formData) {
                let selector: string = "[value='" + entry[1] + "']";
                let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);

                let containershopping: HTMLDivElement = <HTMLDivElement>document.createElement("div"); 
                let toDocontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                let moneycontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
                let cashcontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");

                switch (entry[0]) {
                    case "Menge":
                        break;
                    case "einkauf":
                        let itemPrice: number = Number(item.getAttribute("price"));
                        let menge: number = Number(formData.get("Menge"));
                        let market: string = String(formData.get("Ort"));

                        itemPrice = menge * itemPrice;
                        let gesamt: number = itemPrice;

                        containershopping.innerHTML = "" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                        list.appendChild(containershopping);
                        totalCost += itemPrice;
                        console.log(market);
                        form.reset();
                        break;
                    case "hilfe":
                        let price: number = Number(item.getAttribute("price"));
                        toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                        list.appendChild(toDocontainer);
                        totalCost += price;
                        form.reset();
                        break;

                    case "money":
                        let geld: number = Number(formData.get("Money"));
                        moneycontainer.innerHTML = "<h4>Geld abheben</h4>" + item.value + " €";
                        list.appendChild(moneycontainer);
                        totalCost += geld;
                        form.reset();
                        break;

                    case "bezahlung":
                        let paypal: HTMLInputElement = <HTMLInputElement>document.getElementById("PayPal");
                        let bar: HTMLInputElement = <HTMLInputElement>document.getElementById("Bar");
                        let zahlungsart: string;
                        if (bar.checked == true) {
                            zahlungsart = "Bar";
                            cashcontainer.innerHTML = zahlungsart + " bezahlen";
                        } else if (paypal.checked == true) {
                            zahlungsart = "PayPal";
                            cashcontainer.innerHTML = "Mit " + zahlungsart + " zahlen";
                        } else {
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


        function deleteList(_event: Event): void {
                let mainlist: HTMLDivElement = <HTMLDivElement>document.querySelector("div#list");
                while (mainlist.firstChild) {
                    mainlist.removeChild(mainlist.firstChild);
                }
            
        }

    });







}
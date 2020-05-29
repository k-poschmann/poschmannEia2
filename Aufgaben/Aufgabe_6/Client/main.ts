namespace Haushaltshilfe_6 {
    window.addEventListener("load", handleLoad);
    let totalCost: number = 0;
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("#form");
    let totalprice: HTMLLabelElement = <HTMLLabelElement>document.querySelector("#totalprice");
    let url: string = "https://hfucocktailbar.herokuapp.com/";



    async function handleLoad(_event: Event): Promise<void> {
        let deletebtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=reset]");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#submit");
        let btn1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn1");
        let btn2: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn2");
        let btn4: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn4");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);
        generateContent(data);
        // Event-Listener werden auf alle Buttons gesetzt
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);
        submit.addEventListener("click", sendOrder);
        deletebtn.addEventListener("click", deleteList);

    }




    async function sendOrder(): Promise<void> {
        console.log("send order");
        let formData: FormData = new FormData(document.forms[0]);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch (url + "?" + query.toString());
        let responseText: string = await response.text();
        //await fetch("index.html?" + query.toString());
        alert(responseText);
    }


    function handleChange(_event: Event): void {

        //selektieren des Elements, wo am Ende alles 'reinkommt'
        let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");

        //Erstellen des FormData Elements
        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);

            let containershopping: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let toDocontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
            let cashcontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");

            switch (entry[0]) {
                case "Menge":
                    break;
                case "einkauf":
                    let itemPrice: number = Number(item.getAttribute("price"));
                    let menge: number = Number(formData.get("Menge"));
                    let market: string = String(formData.get("Ort"));

                    itemPrice = menge * itemPrice;

                    containershopping.innerHTML = menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                    list.appendChild(containershopping);
                    totalCost += itemPrice;
                    console.log(market);
                    break;
                case "hilfe":
                    let price: number = Number(item.getAttribute("price"));
                    toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                    list.appendChild(toDocontainer);
                    totalCost += price;
                    break;
                case "bezahlung":
                    let paypal: HTMLInputElement = <HTMLInputElement>document.getElementById("Paypal");
                    let bar: HTMLInputElement = <HTMLInputElement>document.getElementById("Bar");
                    let zahlungsart: string;
                    if (bar.checked == true) {
                        zahlungsart = "Bar";
                        cashcontainer.innerHTML = zahlungsart + " bezahlen";
                    } else if (paypal.checked == true) {
                        zahlungsart = "Paypal";
                        cashcontainer.innerHTML = "Mit " + zahlungsart + " zahlen";
                    } else {
                        zahlungsart = "Überweisung";
                        cashcontainer.innerHTML = "Per " + zahlungsart + " bezahlen";
                    }

                    //cashcontainer.innerHTML = "" + zahlungsart;
                    list.appendChild(cashcontainer);
                    break;
            }
        
        }

        totalprice.innerHTML = "GESAMT: " + totalCost.toFixed(2) + " €";
        list.appendChild(totalprice);


    }


    function deleteList(_event: Event): void {
        let mainlist: HTMLDivElement = <HTMLDivElement>document.querySelector("div#list");
        mainlist.innerHTML = "";

    }

}







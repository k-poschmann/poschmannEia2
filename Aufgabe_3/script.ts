namespace Haushaltshilfe {
    window.addEventListener("load", handleLoad);

    // Die Variablen werden typisiert und deklariert

    let totalCost: number = 0;
    let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
    let selectshopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectshopping");
    let selecthelp: HTMLInputElement = <HTMLInputElement>document.querySelector("#selecthelp");
    let selectmoney: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectmoney");
    let confirm: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#confirm");

    let einkauf: HTMLDivElement = <HTMLDivElement>document.querySelector("#einkauf");
    let hilfe: HTMLDivElement = <HTMLDivElement>document.querySelector("#hilfe");
    let geld: HTMLDivElement = <HTMLDivElement>document.querySelector("#geld");
    let bezahlung: HTMLDivElement = <HTMLDivElement>document.querySelector("#bezahlung");
    let btn1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn1");
    let btn2: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn2");
    let btn3: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn3");
    let btn4: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn4");
    let totalprice: HTMLLabelElement = <HTMLLabelElement>document.querySelector("#totalprice");



    function handleLoad(_event: Event): void {
        //console.log("Start");

        // Event-Listener werden auf alle Buttons gesetzt
        //confirm.addEventListener("click", handleChange);
        btn1.addEventListener("click", handleChange);
        btn2.addEventListener("click", handleChange);
        btn3.addEventListener("click", handleChange);
        btn4.addEventListener("click", handleChange);

    }



    function handleChange(_event: Event): void {
        //selektieren des Elements, wo am Ende alles 'reinkommt'
        let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");

        //Erstellen des FormData Elements
        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selector: string = "[value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);

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
                    let itemPrice: number = Number(item.getAttribute("price"));
                    let menge: number = Number(formData.get("Menge"));
                    let market: string = String(formData.get("maerkte"));

                    itemPrice = menge * itemPrice;
                    let gesamt: number = itemPrice; 
                    
                    
                    containershopping.innerHTML = "<h4>Einkauf</h4>" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
                    list.appendChild(containershopping);
                    totalCost += itemPrice;
                    form.reset();
                    break;

                case "toDo":
                   let price: number = Number(item.getAttribute("price"));
                   toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
                   list.appendChild(toDocontainer);
                   totalCost += price;
                   form.reset();
                   break;

                case "money":
                    let geld: number = Number(formData.get("money"));
                    moneycontainer.innerHTML = "<h4>Geld abheben</h4>" + geld + " €";
                    list.appendChild(moneycontainer);
                    form.reset();
                    break;

                case "cash":
                    let cash: string = String(item.getAttribute("value"));
                    cashcontainer.innerHTML = "" + cash;
                    list.appendChild(cashcontainer);
            }



        }


    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }



}
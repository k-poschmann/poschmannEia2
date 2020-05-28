namespace L06_CocktailBar {
    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let url: string = "http://localhost:5001";

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Init");

        let response: Response = await fetch("Data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        form = <HTMLFormElement>document.querySelector("#orderForm");
        let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button[type=button]");
        console.log(submit);
        submit.addEventListener("click", sendOrder);

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);

        displayOrder();
    }

    async function sendOrder(_event: Event): Promise<void> {
        console.log("send Order");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch (url + "?" + query.toString());
        let responseText: string = await response.text();
        await fetch("index.html?" + query.toString());
        alert(responseText);
    }

    function handleChange(_event: Event): void {
        displayOrder();
    }

    function displayOrder(): void {
        // let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        // console.log(inputs);
        let price: number = 0;
        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(form);

        // console.group("Order");
        for (let entry of formData) {
            // console.log(entry);
            let selector: string = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
            let itemPrice: number = Number(item.getAttribute("price"));
            switch (entry[0]) {
                case "Amount":
                    break;
                case "Drink":
                    let amount: number = Number(formData.get("Amount"));
                    itemPrice = amount * itemPrice;
                    order.innerHTML += amount + " L " + item.value + ": €" + itemPrice + "<br>";
                    break;
                default:
                    order.innerHTML += item.value + ": €" + itemPrice.toFixed(2) + "<br>";
            }
            // console.log(item);
            price += itemPrice;
        }
        // console.groupEnd();

        order.innerHTML += "<p><strong>Total: : €" + price.toFixed(2);
    }


    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }
}
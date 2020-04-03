namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        //console.log("start");

        let form: HTMLDivElement = document.querySelector("div#form");
        let slider: HTMLInputElement = document.querySelector("#amount");

        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value=" + entry[1] +  "']");
            let price: number = Number(item.getAttribute("price"));
            console.log(price);
        }
    }

    function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    }

}
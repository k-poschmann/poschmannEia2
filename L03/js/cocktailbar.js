var L03_CocktailBar;
(function (L03_CocktailBar) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        //console.log("start");
        var form = document.querySelector("div#form");
        var slider = document.querySelector("#amount");
        form.addEventListener("change", handleChange);
        slider.addEventListener("input", displayAmount);
    }
    function handleChange(_event) {
        //console.log(_event);
        //let drink: HTMLSelectElement = <HTMLSelectElement>document.querySelector("select");
        //console.log(drink.value);
        var order = document.querySelector("div#order");
        order.innerHTML = "";
        var formData = new FormData(document.forms[0]);
        console.log(formData);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            console.log(entry);
            var item = document.querySelector("[value=" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            console.log(price);
        }
    }
    function displayAmount(_event) {
        var progress = document.querySelector("progress");
        var amount = _event.target.value;
        progress.value = parseFloat(amount);
    }
})(L03_CocktailBar || (L03_CocktailBar = {}));
//# sourceMappingURL=cocktailbar.js.map
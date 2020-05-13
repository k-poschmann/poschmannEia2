"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    function generateContent(_data) {
        //console.log(_data);
        for (let category in Haushaltshilfe.data) {
            let items = Haushaltshilfe.data[category];
            let group = null;
            switch (category) {
                case "Auswahl":
                    group = createMultiple(items, category);
                    break;
                case "Einkauf":
                    group = createMultiple(items, category);
                    break;
                case "Ort":
                    group = createList(items, category);
                    break;
                case "Haushaltshilfe":
                    group = createMultiple(items, category);
                    break;
                case "Bezahlung":
                    group = createSingle(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset" + category);
            if (fieldset && group) {
                fieldset.appendChild(group);
            }
        }
    }
    Haushaltshilfe.generateContent = generateContent;
    function createMultiple(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=GenerateContent.js.map
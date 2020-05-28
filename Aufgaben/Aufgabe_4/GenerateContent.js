"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    function generateContent(_data) {
        //console.log(_data);
        for (let category in Haushaltshilfe.data) {
            let items = Haushaltshilfe.data[category];
            let group = null;
            switch (category) {
                case "einkauf":
                    group = createMultiple(items, category);
                    break;
                case "Ort":
                    group = createList(items, category);
                    break;
                case "hilfe":
                    group = createMultiple(items, category);
                    break;
                case "bezahlung":
                    group = createSingle(items, category);
                    break;
                default:
                    break;
            }
            let fieldset = document.querySelector("fieldset" + "#" + category);
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
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }
    function createList(_items, _category) {
        let group = document.createElement("div");
        let selection = document.createElement("select");
        for (let item of _items) {
            let option = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;
            option.setAttribute("price", item.price.toFixed(2));
            selection.setAttribute("name", "Ort");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            selection.appendChild(option);
            option.appendChild(label);
            group.appendChild(selection);
        }
        return group;
    }
    function createSingle(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let radio = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;
            let br = document.createElement("br");
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=GenerateContent.js.map
namespace Haushaltshilfe {

    export function generateContent(_data: Data): void {
        //console.log(_data);

        for (let category in data) {
            let items: Item[] = data[category];

            let group: HTMLElement | null = null;
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
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset" + "#" + category);
            if (fieldset && group) {
                fieldset.appendChild(group);
            }
        }
    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let br: HTMLElement = document.createElement("br");
            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }

    function createList(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        let selection: HTMLSelectElement = document.createElement("select");

        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;
            option.setAttribute("price", item.price.toFixed(2));
            selection.setAttribute("name", "Ort");

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            selection.appendChild(option);
            option.appendChild(label);
            group.appendChild(selection);

        }

        return group;
    }

    function createSingle(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "radio";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let br: HTMLElement = document.createElement("br");

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);
            group.appendChild(br);
        }
        return group;
    }

}
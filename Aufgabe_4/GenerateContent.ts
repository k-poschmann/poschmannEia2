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
                case "Bezahlung":
                    group = createSingle(items, category);
                    break;

                default:
                    break;
            }
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset" + category);
            if (fieldset && group) {
                fieldset.appendChild(group);
            }
        }
    }

    function createMultiple(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkox";
            checkbox.setAttribute("price", item.price.toFixed(2));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(checkbox);
            group.appendChild(label);
        }
        return group;
    }

    function createList(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        let input: HTMLInputElement = document.createElement("input");
        input.name = _category;

        let selection: HTMLSelectElement = document.createElement("select");

        for (let item of _items) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("name", item.name);
            option.value = item.name;
            option.setAttribute("price", item.price.toFixed(2));

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(input);
            group.appendChild(selection);
            selection.appendChild(option);

        }

        return group;
    }

    function createSingle(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");

        for (let item of _items) {
            let radio: HTMLInputElement = document.createElement("input");
            radio.type = "checkox";
            radio.setAttribute("price", item.price.toFixed(2));
            radio.value = item.name;
            radio.name = _category;
            radio.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            group.appendChild(radio);
            group.appendChild(label);

        }
        return group;
    }

}
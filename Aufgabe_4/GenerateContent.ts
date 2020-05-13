namespace Haushaltshilfe {

    export function generateContent(_data: Data): void {
        //console.log(_data);

        for (let category in data) {
            let items: Item[] = data[category];

            let group: HTMLElement | null = null;
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
            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset" + category);
            if (fieldset && group) {
                fieldset.appendChild(group);
            }
        }
    }

    function createMultiple(_items: Item [], _category: string): HTMLElement | null {
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
}
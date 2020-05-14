namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }


    export let data: Data = {
        einkauf: [
            { name: "Butter | 1.59€ | (Stk.)", price: 1.59 },
            { name: "Milch | 0.79€ | (1.5 Liter)", price: 0.79 },
            { name: "Eier | 1.69€ | Pk.)", price: 1.69 },
            { name: "Brot | 1.29€ | (Stk.)", price: 1.29 },
            { name: "Wurst | 1.49€ | (Pk.)", price: 1.49 },
            { name: "Käse | 1.99€ | (Pk.)", price: 1.99 }
        ],
        Ort: [
            { name: "Rewe", price: 0 },
            { name: "Netto", price: 0 },
            { name: "Aldi", price: 0 },
            { name: "Edeka", price: 0 }
        ],
        hilfe: [
            { name: "Rasen mähen", price: 10 },
            { name: "Putzenn", price: 20 },
            { name: "Post wegbringen", price: 5 }
        ],
        bezahlung: [
            { name: "Bar", price: 0 },
            { name: "Paypal", price: 0 },
            { name: "Überweisung", price: 0 }
        ]


    };
}
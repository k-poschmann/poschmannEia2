namespace Haushaltshilfe {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }


    export let data: Data = {
        Auswahl: [
            { name: "Einkaufen", price: 0 },
            { name: "Haushaltshilfe", price: 0 },
            { name: "Geld Abheben", price: 0 }
        ],
        Einkauf: [
            { name: "Butter", price: 1.59 },
            { name: "Milch", price: 0.79 },
            { name: "Eier", price: 1.69 },
            { name: "Brot", price: 1.29 },
            { name: "Wurst", price: 1.49 },
            { name: "Käse", price: 1.99 }
        ],
        Ort: [
            { name: "Rewe", price: 0 },
            { name: "Netto", price: 0 },
            { name: "Aldi", price: 0 },
            { name: "Edeka", price: 0 }
        ],
        Haushaltshilfe: [
            { name: "Rasen mähen", price: 10 },
            { name: "Putzenn", price: 20 },
            { name: "Post wegbringen", price: 5 }
        ],
        Bezahlung: [
            { name: "Bar", price: 0 },
            { name: "Paypal", price: 0 },
            { name: "Überweisung", price: 0 },
        ]


    };
}
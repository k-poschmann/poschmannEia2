namespace L04_CocktailBar {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Drink: [
            { name: "Mojito", price: 25.00 },
            { name: "Caipirinha", price: 30.00 },
            { name: "Bloody Mary", price: 21.00 }
        ],
        Extras: [
            { name: "Ice", price: 0.50 },
            { name: "Lemon", price: 0.20 },
            { name: "Orange", price: 0.15 },
            { name: "Mint", price: 0.30 }
        ],
        Container: [
            { name: "Slim", price: 3.50 },
            { name: "Wide", price: 4.00 },
            { name: "Papercup", price: 0.50 },
            { name: "Plasticbag", price: 0.05 }
        ]
    };
}
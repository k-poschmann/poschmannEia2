"use strict";
var Haushaltshilfe;
(function (Haushaltshilfe) {
    Haushaltshilfe.data = {
        einkauf: [
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
        hilfe: [
            { name: "Rasen mähen", price: 10 },
            { name: "Putzenn", price: 20 },
            { name: "Post wegbringen", price: 5 }
        ],
        Bezahlung: [
            { name: "Bar", price: 0 },
            { name: "Paypal", price: 0 },
            { name: "Überweisung", price: 0 }
        ]
    };
})(Haushaltshilfe || (Haushaltshilfe = {}));
//# sourceMappingURL=Data.js.map
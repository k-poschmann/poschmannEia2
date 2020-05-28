"use strict";
// namespace Haushaltshilfe {
//     window.addEventListener("load", handleLoad);
//     // Die Variablen werden typisiert und deklariert
//     let totalCost: number = 0;
//     let form: HTMLFormElement = <HTMLFormElement>document.querySelector("form");
//     let selectshopping: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectshopping");
//     let selecthelp: HTMLInputElement = <HTMLInputElement>document.querySelector("#selecthelp");
//     let selectmoney: HTMLInputElement = <HTMLInputElement>document.querySelector("#selectmoney");
//     let confirm: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#confirm");
//     let btn1: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn1");
//     let btn2: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn2");
//     let btn3: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn3");
//     let btn4: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#btn4");
//     let deletebtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#delete");
//     let totalprice: HTMLLabelElement = <HTMLLabelElement>document.querySelector("#totalprice");
//     let bar: HTMLInputElement = <HTMLInputElement>document.querySelector("#bar");
//     let paypal: HTMLInputElement = <HTMLInputElement>document.querySelector("#paypal");
//     let ueberweisung: HTMLInputElement = <HTMLInputElement>document.querySelector("#ueberweisung");
//     function handleLoad(_event: Event): void {
//         //console.log("Start");
//         // Event-Listener werden auf alle Buttons gesetzt
//         confirm.addEventListener("click", handleChange);
//         btn1.addEventListener("click", handleChange);
//         btn2.addEventListener("click", handleChange);
//         btn3.addEventListener("click", handleChange);
//         btn4.addEventListener("click", handleChange);
//         deletebtn.addEventListener("click", deleteList);
//     }
//     function handleChange(): void {
//         //selektieren des Elements, wo am Ende alles 'reinkommt'
//         let list: HTMLDivElement = <HTMLDivElement>document.querySelector("#list");
//         //Erstellen des FormData Elements
//         let formData: FormData = new FormData(document.forms[0]);
//         for (let entry of formData) {
//             let selector: string = "[value='" + entry[1] + "']";
//             let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);
//             let containershopping: HTMLDivElement = <HTMLDivElement>document.createElement("div");            let toDocontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
//             let moneycontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
//             let cashcontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
//             let auswahlcontainer: HTMLDivElement = <HTMLDivElement>document.createElement("div");
//             switch (entry[0]) {
//                 case "Auswahl":
//                     let auswahl: string = String(item.getAttribute("value"));
//                     auswahlcontainer.innerHTML = "" + auswahl;
//                     list.appendChild(auswahlcontainer);
//                     console.log(auswahlcontainer);
//                     break;
//                 case "Menge":
//                     break;
//                 case "Items":
//                     let itemPrice: number = Number(item.getAttribute("price"));
//                     let menge: number = Number(formData.get("Menge"));
//                     let market: string = String(formData.get("maerkte"));
//                     itemPrice = menge * itemPrice;
//                     let gesamt: number = itemPrice;
//                     containershopping.innerHTML = "<h4>Einkauf</h4>" + menge + " " + entry[1] + " " + itemPrice.toFixed(2) + " €" + " " + market;
//                     list.appendChild(containershopping);
//                     totalCost += itemPrice;
//                     form.reset();
//                     break;
//                 case "toDo":
//                     let price: number = Number(item.getAttribute("price"));
//                     toDocontainer.innerHTML = "<h4>Haushaltshilfe</h4>" + entry[1] + price + " €";
//                     list.appendChild(toDocontainer);
//                     totalCost += price;
//                     form.reset();
//                     break;
//                 case "Money":
//                     let geld: number = Number(formData.get("Money"));
//                     moneycontainer.innerHTML = "<h4>Geld abheben</h4>" + geld + " €";
//                     list.appendChild(moneycontainer);
//                     totalCost += geld;
//                     form.reset();
//                     break;
//                 case "cash":
//                     if (bar.value == "checked") {
//                         cashcontainer.innerHTML = "" + bar.value;
//                     } else if (paypal.value == "checked") {
//                         cashcontainer.innerHTML = "" + paypal.value;
//                     } else {
//                         cashcontainer.innerHTML = "" + ueberweisung.value;
//                     }
//                     //cashcontainer.innerHTML = "" + zahlungsart;
//                     list.appendChild(cashcontainer);
//                     form.reset();
//                     break;
//             }
//             totalprice.innerHTML = "GESAMT: " + totalCost.toFixed(2) + " €";
//             list.appendChild(totalprice);
//         }
//     }
//     function deleteList(): void {
//     }
// }
//# sourceMappingURL=script.js.map
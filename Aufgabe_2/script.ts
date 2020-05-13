// namespace Sequenzmemorie {
//     window.addEventListener("load", function () {
//         let selectedWrd: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#options");
//         let writtenWrd: HTMLInputElement = <HTMLInputElement>document.querySelector("#ownsequence");
//         let playground: HTMLDivElement = <HTMLDivElement>document.querySelector("#playground");
//         let enterbtn: HTMLButtonElement = <HTMLButtonElement>document.querySelector("#enter");
//         enterbtn.addEventListener("click", enter);

//         function enter(): void {
//             let inputMixed: string[] = [];

//             if (selectedWrd.value != "") {
//                 let shuffled: string = selectedWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
//                 inputMixed.push(shuffled);

//                 playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";
//                 console.log(playground);
//             }
//             else if (selectedWrd.value == "") {
//                 let shuffled: string = writtenWrd.value.split("").sort(function () { return 0.5 - Math.random(); }).join("");
//                 inputMixed.push(shuffled);

//                 playground.innerHTML = "<p class='letters'>" + inputMixed + "</p>";


//                 console.log(playground);
//             }

//         }
//         //Funktion 'Enter' Ende

//         function hint(_event: KeyboardEvent): void {
//             if (_event.keyCode == 83) {
//                 //dann zeige alle Buchstaben mit klasse .letters
//             } else {
//                 // dann gebe den Buchstaben die Klasse .hide
//             }
//         }
//     });



// }
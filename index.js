import { faLista } from "./fuggvenyek.js";
import { megjelenit } from "./fuggvenyek.js";
import { folevisz } from "./fuggvenyek.js";
import { kivalaszt } from "./fuggvenyek.js";

console.log(faLista)
const megjelenites=document.querySelector(".tartalom")

let kartya=megjelenit(faLista)
megjelenites.innerHTML=kartya

folevisz(faLista)
kivalaszt(faLista)
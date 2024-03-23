
export const faLista = [
    {
        nev: "Tölgy",
        fajta: "lombhullató",
        magassag: 20, 
        eletkor: 150
    },
    {
        nev: "Fenyő",
        fajta: "tűlevelű",
        magassag: 25,
        eletkor: 200
    },
    {
        nev: "Juhar",
        fajta: "lombhullató",
        magassag: 15,
        eletkor: 100
    },
    {
        nev: "Diófa",
        fajta: "lombhullató",
        magassag: 10,
        eletkor: 80
    },
    {
        nev: "Fűzfa",
        fajta: "lombhullató",
        magassag: 10,
        eletkor: 95
    }
];

export function megjelenit(lista){ 
    let kartya=""
    for (let i = 0; i < lista.length; i++){
        kartya+= "<div>"
        kartya+=`<h3>${lista[i].nev}</h3>`
        kartya+= `<p> Fajta: ${lista[i].fajta}, <br>Magasság: ${lista[i].magassag} m, <br>Életkor: ${lista[i].eletkor} év</p>`
        kartya+="</div>"
        
    }  
    return kartya 
}


export function folevisz(lista) {
    const divek = document.querySelectorAll(".tartalom div");

    divek.forEach(function(div) {
        div.addEventListener("mouseover", function() {
            div.classList.add("kiv");
        });
        div.addEventListener("mouseleave", function() {
            div.classList.remove("kiv");
        });
    });
}

const kivalasztottak = []

export function kivalaszt(lista) {
    const kivElemek = document.querySelector(".kiv");
    const kartyaDivek = document.querySelectorAll(".tartalom div");
    const kivalasztottElemek = {};

    for (let i = 0; i < kartyaDivek.length; i++) {
        kartyaDivek[i].addEventListener("click", function() {
            const nev = lista[i].nev;
            /* if (kivalasztottak.indexOf(nev) === -1) {
                kivalasztottak.push(nev);
                console.log(kivalasztottak);
                kivElemek.innerHTML += `<div><p>${nev}</p></div>`;
            } */

            if (kivalasztottElemek[nev]) {
                kivalasztottElemek[nev]++;
            } else {
                kivalasztottElemek[nev] = 1;
            }
            kivElemek.innerHTML = "";
            for (const elem in kivalasztottElemek) {
                kivElemek.innerHTML += `<div><p>${elem} (${kivalasztottElemek[elem]} darab)</p></div>`;
            }
        });
    }
}


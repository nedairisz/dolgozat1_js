
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
        kartya+= `<p> Fajta: ${lista[i].fajta}, Magasság: ${lista[i].magassag} m, Életkor: ${lista[i].eletkor} év</p>`
        kartya+="</div>"
        
    }  
    return kartya 
}


export function folevisz(lista) {
    const divek = document.querySelectorAll(".tartalom div");

    divek.forEach(function(div) {
        div.addEventListener("click", function() {
            div.classList.add("kiv");
        });
    });
}

const kivalasztottak = []
export function kivalaszt(lista){
    const divek= document.querySelectorAll(".tartalom div")
    for (let index = 0; index < divek.length; index++) {
        divek[index].addEventListener("click", function(){
            //const masoltDivek=document.querySelectorAll(".tartalom div")
            if (kivalasztottak.indexOf(lista[index].nev===-1)){
                kivalasztottak.push(lista[index].nev)
            }
            console.log(kivalasztottak)
            //masoltDivek.innerHTML=kivalasztottak
        })
    }
}
 
function listaKiir(lista){
    const ELEM = document.querySelector(".tartalom");
    ELEM.innerHTML = `<p>${lista}</p>`
}
listaKiir(kivalasztottak)
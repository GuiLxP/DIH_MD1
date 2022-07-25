"use strict";
// M1S03A1
// var não é muito utilizada hoje em dia.
// foi substituida por const e let.
// const ==> um valor constante. Que não muda
// let ==> uma variável que pode ser reatribuída.



var nome = "Ada";
var sobrenome = "Lovelace";
var nomeCompleto = nome + " " + sobrenome;
var idade = 18;

if (idade >= 18) {
    console.log(`A usuária ${nomeCompleto} é adulta.`);
} else {
    console.log(`A usuária ${nomeCompleto} NÃO é adulta.`);
}


const listaDeCarros = ['uno', 'fusca', 'escort', 'gol'];
let indice = 0;

while (indice < listaDeCarros.length) {
    console.log(listaDeCarros[indice]);
    indice++;
}

// let indice = 0;

// do {
//     console.log(listaDeCarros[indice] + ' ' + indice);
//     indice++;
// } while (listaDeCarros[indice]);


for (i = 0; i < listaDeCarros.length; i++) {
    console.log(listaDeCarros[i])
}

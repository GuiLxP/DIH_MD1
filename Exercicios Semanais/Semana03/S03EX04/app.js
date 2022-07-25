console.log("Exercício 4");

const numeroRaiz = document.getElementById("numeroRaiz");
const numeroInicial = document.getElementById("numeroInicial");
const pResultado = document.getElementById("result");
const btnCalcPA = document.getElementById("btn-calc-pa");
const btnCalcPG = document.getElementById("btn-calc-pg");

function calcPA() {
    const vRaiz = +numeroRaiz.value; // v significa valores/valor
    const vInicial = +numeroInicial.value;
    const result = [];

    result.push(vInicial);
    for (let i = 1; i <= 10; i++) {
        result.push(result[i - 1] + vRaiz);
    }

    pResultado.innerText = result.join(', ');
}

function calcPG() {
    const vRaiz = +numeroRaiz.value;
    const vInicial = +numeroInicial.value;
    const result = [];

    result.push(vInicial);
    for (let i = 1; i < 10; i++) {
        result.push(result[i - 1] * vRaiz);
    }

    pResultado.innerText = result.join(', ');
}

btnCalcPA.addEventListener("click", calcPA);
btnCalcPG.addEventListener("click", calcPG);

// Que explicação maravilhosa, obrigado Romeu!
let inputA = document.getElementById("numberInput1");
let inputB = document.getElementById("numberInput2");
const inputResultado = document.getElementById("InputReadOnly");
const btnSoma = document.getElementById("soma");
const btnSubtrai = document.getElementById("subtracao");
const btnMultiplica = document.getElementById("multiplicacao");
const btnDivide = document.getElementById("divisao");

function calculos(operacao) {
    const input1 = +inputA.value;
    const input2 = +inputB.value;
    let resultado = null;

    switch (operacao) {
        case "+":
            resultado = input1 + input2;
            break;
        case "-":
            resultado = input1 - input2;
            break;
        case "*":
            resultado = input1 * input2;
            break;
        case "/":
            resultado = input1 / input2;
            break;
        default:
    }
    inputResultado.value = resultado;
}

btnSoma.addEventListener("click", () => calculos("+"));
btnSubtrai.addEventListener("click", () => calculos("-"));
btnMultiplica.addEventListener("click", () => calculos("*"));
btnDivide.addEventListener("click", () => calculos("/"));

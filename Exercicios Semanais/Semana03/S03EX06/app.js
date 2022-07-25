let input1 = document.getElementById("inputDate");
const btnCalc = document.getElementById("btnCalcIdade");
const pResult = document.getElementById("mostraTexto");
// input1 = +input1;

function calculaData() {

    input1 = input1.value;
    input1 = new Date(input1).getFullYear();
    
    let actualDate = new Date().getFullYear();
    console.log(actualDate)
    pResult.innerText = `Sua idade aproximadamente:\n ${actualDate - input1}`;
}


btnCalc.addEventListener("click", calculaData);

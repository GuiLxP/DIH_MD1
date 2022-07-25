const palavra = 'renner';
const tamanho = palavra.length;

let resultado = true;
for(let i = 0; i < tamanho ; i++) {
    if(palavra[i] !== palavra[(tamanho - 1) -i]) {
        resultado = false;
        break;
    }
}
console.log(`O resultado para o palindrome é: ${resultado}`);

class Teste {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    set idade(idade) {
        this.idade = idade
    }
}
const romeu = new Teste("Guilherme", 20);




console.log(romeu);

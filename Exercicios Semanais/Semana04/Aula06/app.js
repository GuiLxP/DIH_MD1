class Animal {
    constructor(nome, idade, som) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
}

class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "latido");
    }
}

class Gato extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "miado");
    }
}

const snoopy = new Cachorro("snoopy", 10);
console.log(snoopy.som);
const frajola = new Gato("frajola", 8);
console.log(frajola.som);

const mel = new Cachorro("Mel", 8);
console.log(`Som da Mel: ${mel.som}`);

const rommeu = new Gato("Rommeu", 9);
console.log(`Som do Rommeu: ${rommeu.som}`);

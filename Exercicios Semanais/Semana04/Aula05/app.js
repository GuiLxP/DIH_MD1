class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.percentualVida = 100; // não esta declarado pq esta cravado
    }

    sofreuDano(percentualDano) {
        if (percentualDano >= this.percentualVida) {
            this.percentualVida = 0;
        } else {
            this.percentualVida -= percentualDano;
        }
    }

    usouKitMedico() {
        const percentualCura = 10;
        if (this.percentualVida > 100 - percentualCura) {
            this.percentualVida = 100;
        } else {
            this.percentualVida += percentualCura;
        }
    }
}

const player1 = new Personagem('Kratos')
console.log(player1);

player1.sofreuDano(50);
console.log(player1);

player1.usouKitMedico();
console.log(player1);
console.log(`Kratos' HP: ${player1.percentualVida}`);

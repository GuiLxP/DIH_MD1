class Juros {
    constructor(capitalInicial, taxa, tempo) {
        this.capitalInicial = capitalInicial;
        this.taxa = taxa;
        this.tempo = tempo;
    }

    calcularJurosSimples() {
        // J = C * i * t
        const j = this.capitalInicial * this.taxa * this.tempo;
        return j.toFixed(2);
    }

    calcularJurosCompostos() {
        //M = C (l+i) ** 1
        const m = this.capitalInicial * (1 + this.taxa) ** this.tempo;
        return m.toFixed(2);
    }
}

// C = 100000 i = 0,07 t = 25
let juros = new Juros(10000, 0.07, 24);
let montanteComJurosSimples = juros.calcularJurosSimples();
let montanteComJurosCompostos = juros.calcularJurosCompostos();

console.log(montanteComJurosSimples, montanteComJurosCompostos);


// C = 100000 i = 0,15 t = 10
juros = new Juros(10000, 0.15, 10);
montanteComJurosSimples = juros.calcularJurosSimples();
montanteComJurosCompostos = juros.calcularJurosCompostos();

console.log(montanteComJurosSimples, montanteComJurosCompostos);
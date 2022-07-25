class Time {
    constructor(nome, sigla) {
        this.nome = nome;
        this.sigla = sigla;
        this.vitorias = 0;
        this.derrotas = 0;
        this.empates = 0;
        this.golsMarcados = 0;
        this.golsSofridos = 0;
    }

    get jogos() {
        return this.vitorias + this.derrotas + this.empates;
    }

    get pontos() {
        return this.vitorias * 3 + this.empates;
    }

    computarPartida(partida) {
        if (partida.time1 === this.sigla) {
            if (partida.golsDoTime1 > partida.golsDoTime2) {
                this.vitorias++;
            } else if (partida.golsDoTime1 < partida.golsDoTime2) {
                this.derrotas++;
            } else {
                this.empates++;
            }
            this.golsMarcados += partida.golsDoTime1;
            this.golsSofridos += partida.golsDoTime2;
        } else if (partida.time2 === this.sigla) {
            if (partida.golsDoTime2 > partida.golsDoTime1) {
                this.vitorias++;
            } else if (partida.golsDoTime2 < partida.golsDoTime1) {
                this.derrotas++;
            } else {
                this.empates++;
            }
            this.golsMarcados += partida.golsDoTime2;
            this.golsSofridos += partida.golsDoTime1;
        }
    }

    exibirSituacao() {
        const msg = `Time ${this.sigla} tem ${this.jogos} jogos, ${this.pontos} pontos, 
                    ${this.vitorias} vitorias, ${this.empates} empates, ${this.derrotas} derrotas,
                    ${this.golsMarcados} gols marcados e ${this.golsSofridos} gols sofridos.`;
        return msg;
    }
}

class Partida {
    constructor(time1, golsDoTime1, time2, golsDoTime2) {
        this.time1 = time1;
        this.golsDoTime1 = golsDoTime1;
        this.time2 = time2;
        this.golsDoTime2 = golsDoTime2;
    }
}

const time = new Time("Flamengo Futebol Clube", "FFC");
console.log(time.exibirSituacao());
const partida1 = new Partida("FFC", 4, "Juventus", 1); // vitorias
const partida2 = new Partida("FFC", 4, "Barcelona", 4); // empate
const partida3 = new Partida("Real Madrid", 3, "FFC", 2); // derrota
time.computarPartida(partida1);
time.computarPartida(partida2);
time.computarPartida(partida3);
console.log(time.exibirSituacao());

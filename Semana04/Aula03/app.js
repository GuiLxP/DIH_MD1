// SOMENTE SLIDE ABAIXO
// class Pessoa {
//     constructor(nome, endereco) {
//         this.nome = nome;
//         this.endereco = endereco;
//     }
//     validarIdentificador(identificador) {
//         // codigo de validacao
//         // do identificador...
//         return identificador + 'validador';
//     }
// }

// class PessoaFisica extends Pessoa {
//     constructor(nome, endereco, identificador) {
//         super(nome, endereco)
//         this.cpf = identificador;
//         this.categoria = 'Pessoa Física';
//     }
//     get tipo() { // getter
//         return 'PF';
//     }

//     validarIdentificador() {
//         const validacao = super.validarIdentificador(this.cpf);
//         return 'CPF DA PESSOA FÍSICA: ' + validacao
//     }
// }

// class PessoaJuridica extends Pessoa { // herança
//     constructor(nome, endereco, identificador) {
//         super(nome, endereco);
//         this.cpf = identificador;
//         this.categoria = "Pessoa Juridica"
//     }
//     get tipo() { // getter
//         return 'PJ'
//     }
//     validarIdentificador() {
//         const validacao = super.validarIdentificador(this.cnpj);
//         return 'CNPJ DA PESSOA JURIDICA: ' + validacao;
//     }
// }

// // exemplo de uso

// const pf = new PessoaFisica("Ryu", 'Rua do hjaáo', '123.321.312-30');
// console.log(pf);
// console.log(pf.cpf);
// console.log(pf.categoria);
// console.log(pf.tipo);
// console.log(pf.validarIdentificador());

// const pj = new PessoaJuridica('M fdsajkfa Ltda', 'Rua do Jalapao', '00120312.0-2321.33'); // PARA INSTANCIAR
// console.log(pj);
// console.log(pf.cnpj);
// console.log(pj.tipo);
// console.log(pj.validarIdentificador());






class Veiculo {
    constructor(
        tipoVeiculo,
        marca,
        modelo,
        ano,
        placa,
        qtdMultas,
        velocidadeMaxima
    ) {
        this.tipoVeiculo = tipoVeiculo;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.placa = placa;
        this.qtdMultas = qtdMultas;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    get tipoModelo() {
        return `${this.tipoVeiculo} + ${this.modelo}`;
    }

    adicionaMulta(codigoDaPlaca) {
        if (this.placa == codigoDaPlaca) {
            this.qtdMultas++;
        }
        return this.qtdMultas;
    }
}

const meuVeiculo = new Veiculo(
    "carro",
    "chevrolet",
    "onix",
    "1980",
    "ABC-1234",
    2,
    40
);

console.log(meuVeiculo.tipoModelo);
console.log("multas: ", meuVeiculo.qtdMultas);

meuVeiculo.adicionaMulta("placa diferente");
console.log("multas com placa diferente: ", meuVeiculo.qtdMultas);

meuVeiculo.adicionaMulta("ABC-1234");
console.log("multas com placa igual: ", meuVeiculo.qtdMultas);
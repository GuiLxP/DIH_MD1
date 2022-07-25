class Funcionario {
    constructor(cpf, nomeCompleto, salario) {
        this.cpf = cpf;
        this.nome = nomeCompleto;
        this.salario = salario;
    }

    promover(nroPercentual) {
        const percentual = nroPercentual / 100;
        // this.salario = this.salario * (1 + percentual);
        this.salario *= 1 + percentual;
    }
}

const funcionario = new Funcionario(10236687930, 'Guilherme Pantoja', 10000)
console.log(funcionario);

funcionario.promover(10);
console.log(funcionario);

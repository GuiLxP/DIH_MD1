class Fatura {
    constructor(id, descricaoItem, quantidade, preco) {
        this.id = id;
        this.descricaoItem = descricaoItem;
        this.quantidade = quantidade > 0 ? quantidade : 0;
        this.preco = preco > 0 ? preco : 0;
    }

    obterValorTotal() {
        return this.quantidade * this.preco;
    }
}

const fatura = new Fatura(1, 'Celular', 2, 1000);
console.log(fatura)
console.log(`O valor total da fatura é: R$${fatura.obterValorTotal().toFixed(2)}`);

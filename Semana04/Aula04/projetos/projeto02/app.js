class Tarefa {
    constructor(id, descricao, concluida = false) {
        this.id = id;
        this.descricao = descricao;
        this.concluida = concluida;
    }

    alterarStatus() {
        this.concluida = !this.concluida;
    }
}

const tarefas = []; // guardar objetos da classe Tarefa

function adicionarNovaTarefa() {
    const entrada = document.querySelector('.entrada-item input');
    if (entrada.value === ''){
        return;
    }
    const id = tarefas.length;
    const novaTarefa = new Tarefa(id, entrada.value);
    tarefas.push(novaTarefa);
    entrada.value = '';
    carregarDados();
}


function carregarDados() {
    removerElementos();
    const listaUL = document.querySelector('.lista ul')
    let qtdConcluidos = 0;
    for (let i = 0; i < tarefas.length; i++) {
        const tarefas = tarefas[i];
        if(tarefas.concluida) {
            qtdConcluidos++;
        }
        montarElementoDoItem(tarefas);
        listaUL.append(item);
    }
}

function montarElementoDoItem(tarefas) {
    // checkbox
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.checked = tarefas.concluida;
    // span - texto
    const texto = document.createElement('span');
    texto.innerText = tarefas.descricao;
    // li - novo item
    const item = document.createElement('li');
    item.append(check);
    item.append(texto);
    return item;
}

function removerElementos() {
    const listaUl = document.querySelector('.lista ul');
    while(listaUl.firstChild) {
        listaUl.removeChild(listaUl.lastChild);
    }

}
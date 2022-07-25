console.log('Exercício 9');

const conteudoNome = document.getElementById('conteudoNome');
const btnAdd = document.getElementById('btn-add');
const ulLista = document.getElementById('lista-itens');
const btnSave = document.getElementById("saveItem");

let itens = [];

function atualizaLista() {
    ulLista.innerHTML = ''
    itens.forEach((item, indice) => {
        const li = document.createElement('li');
        const btnExclui = document.createElement("button");
        btnExclui.innerText = 'X';
        li.innerText = item;
        btnExclui.addEventListener('click', () => removeItem(indice)) 
        li.appendChild(btnExclui);
        ulLista.appendChild(li);
    })
}
function adicionaItem() {
    const nomeItem = conteudoNome.value;
    if (nomeItem === '') {
        alert('Por favor, informe um nome de um item')
        return
    }
    itens.push(conteudoNome.value);
    atualizaLista();
    salvaLista();
    conteudoNome.value = '';
}

function removeItem(indice) {
    const itensAtualizado = [];
    for (let i = 0; i < itens.length; i++) {
        if (i !== indice) {
            itensAtualizado.push(itens[i]);
        }
    }
    itens = itensAtualizado;
    atualizaLista();
    salvaLista();
}

function salvaLista() {
    const itensJSON = JSON.stringify(itens);
    localStorage.setItem('itens', itensJSON);
}

btnAdd.addEventListener('click', adicionaItem);
btnSave.addEventListener('click', salvaLista);
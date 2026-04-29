document.addEventListener("DOMContentLoaded", function() {
    const dados = localStorage.getItem('minhaListaSalva');
    if (dados) {
        JSON.parse(dados).forEach(tarefa => adicionar(tarefa));
    }
});


const input = document.getElementById('itemInput');
const lista = document.getElementById('minhaLista');

function adicionar(texto) {
    const li = document.createElement('li');
    li.innerText = texto;
    lista.appendChild(li);
}

function salvar() {
    const itens = [];
    document.querySelectorAll('li').forEach(li => itens.push(li.innerText));
    localStorage.setItem('minhaListaSalva', JSON.stringify(itens));
}

document.getElementById('btnAdicionar').addEventListener('click', function() {
    if (input.value.trim() !== "") {
        adicionar(input.value);
        salvar();
        input.value = "";
    }
});
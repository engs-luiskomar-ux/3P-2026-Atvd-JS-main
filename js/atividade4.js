const input = document.getElementById("input");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {
    const texto = input.value;

    const item = document.createElement("li");
    item.textContent = texto;
    lista.appendChild(item);

    
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";

    
    btnRemover.addEventListener("click", function () {
        lista.removeChild(item);
    });

    item.appendChild(btnRemover);
    lista.appendChild(item);

    input.value = "";
});
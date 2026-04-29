const input = document.getElementById('itemInput');
const lista = document.getElementById('minhaLista');

document.getElementById('btnAdicionar').addEventListener('click', function() {
    
    if (input.value.trim() !== "") {
       
        const li = document.createElement('li');
        li.innerText = input.value + " "; 
        
        const btnRemover = document.createElement('button');

        btnRemover.innerText = "Remover";

        btnRemover.addEventListener('click', function() {
            li.remove();
        });

        
        li.addEventListener('click', function() {
            if (li.style.textDecoration === "line-through") {
                li.style.textDecoration = "";
            } else {
                li.style.textDecoration = "line-through";
            }
        });

        li.appendChild(btnRemover);
        lista.appendChild(li);

        input.value = "";
    }
});
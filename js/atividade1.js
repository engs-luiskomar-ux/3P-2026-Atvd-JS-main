const titulo = document.getElementById('titulo');
const botao = document.getElementById('botao');


  botao.addEventListener('click', function() {
    if (titulo.innerText == "Apertei o título") {
      titulo.innerText = "Sorvete galera";
    } else {
      titulo.innerText = "sapo veio";
    }
  });
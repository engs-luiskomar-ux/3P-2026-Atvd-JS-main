const paragrafo = document.getElementById('paragrafo');
const botao = document.getElementById('botao');
const botao2 = document.getElementById('botao2');

botao.addEventListener('click', function() {
    paragrafo.style.color = paragrafo.style.color === 'red' ? 'black' : 'red';
});

botao2.addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'red' ? 'black' : 'red';
});

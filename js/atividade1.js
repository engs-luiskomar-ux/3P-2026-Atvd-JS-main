const elemento = document.getElementById('texto');

if (elemento) {
  elemento.addEventListener('click', () => {
    elemento.textContent = 'Botao CLicado';
  });
}

const pags = document.querySelectorAll('.pag'); // Seleciona todas as páginas
let pagAtual = 0; // Mantém o índice da página atual
const setaVoltar = document.getElementById('seta-voltar');
const setaAvancar = document.getElementById('seta-avancar');

// Função para mostrar a página atual e esconder as outras
function mostrarPagina(index) {
    // Esconde todas as páginas
    pags.forEach(pag => pag.classList.remove('selecionada'));
    
    // Mostra a página selecionada
    pags[index].classList.add('selecionada');

    // Controla a visibilidade das setas
    if (index === 0) {
        setaVoltar.classList.add('seta-escondida'); // Esconde seta voltar na primeira página
    } else {
        setaVoltar.classList.remove('seta-escondida'); // Mostra a seta voltar se não for a primeira
    }

    if (index === pags.length - 1) {
        setaAvancar.classList.add('seta-escondida'); // Esconde seta avançar na última página
    } else {
        setaAvancar.classList.remove('seta-escondida'); // Mostra a seta avançar se não for a última
    }
}

// Inicializa a página com a primeira selecionada
mostrarPagina(pagAtual);

// Eventos para clicar nas setas
setaVoltar.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    if (pagAtual > 0) {
        pagAtual--; // Volta para a página anterior
        mostrarPagina(pagAtual); // Atualiza a página
    }
});

setaAvancar.addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    if (pagAtual < pags.length - 1) {
        pagAtual++; // Avança para a próxima página
        mostrarPagina(pagAtual); // Atualiza a página
    }
});
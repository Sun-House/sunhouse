// Abre o modal onscroll e armazena um cookie para nao abrir mais:

// Verifica se o modal já foi exibido hoje usando localStorage
var modalShownToday = localStorage.getItem("modalShownToday");
if (!modalShownToday) {
    // Monitora o evento de rolagem da página
    window.addEventListener('scroll', function () {
        // Verifica a posição de rolagem
        if (window.scrollY >= 200) {
            // Abre o modal quando a posição de rolagem atinge 200 pixels
            $('#modal-news').modal('show');
        }
    });

    // Define uma variável no localStorage para rastrear que o modal já foi exibido hoje
    localStorage.setItem("modalShownToday", "true");
}

// Fecha o modal quando o usuário clica fora dele ou no botão de fechar
$('#modal-news').on('hidden.bs.modal', function () {
    $('#modal-news').modal('hide');
});

// Fecha o modal quando o usuário clica no botão de fechar
$('#modalCloseButton').click(function () {
    $('#modal-news').modal('hide');
});
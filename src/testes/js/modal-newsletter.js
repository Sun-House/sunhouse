// Abre o modal onscroll e armazena um cookie para nao abrir mais:

// Verifica se o modal já foi exibido hoje usando localStorage
var modalShownToday = localStorage.getItem("modalShownToday");
if (!modalShownToday) {
    // Monitora o evento de rolagem da página
    function scrollHandler() {
        // Verifica a posição de rolagem
        if (window.scrollY >= 200) {
            // Abre o modal quando a posição de rolagem atinge 200 pixels
            $('#modal-news').modal('show');
            // Remove o ouvinte de evento de rolagem após a primeira exibição do modal
            window.removeEventListener('scroll', scrollHandler);
        }
    }
    window.addEventListener('scroll', scrollHandler);

    // Define uma variável no localStorage para rastrear que o modal já foi exibido hoje
    localStorage.setItem("modalShownToday", "true");
}

// Fecha o modal quando o usuário clica fora dele ou no botão de fechar - ACREDITO QUE JA TENHA NATIVO
//$('#modal-news').on('hidden.bs.modal', function () {
    //$('#modal-news').modal('hide');
//});

// Fecha o modal quando o usuário clica no botão de fechar - ACREDITO QUE JA TENHA NATIVO
//$('#modalCloseButton').click(function () {
    //$('#modal-news').modal('hide');
//});
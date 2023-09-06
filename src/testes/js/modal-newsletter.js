// Abre o modal onscroll e armazena um cookie para nao abrir mais:
// Verifica se o modal já foi exibido usando cookies
if (document.cookie.indexOf("modalShown=true") === -1) {
    // Monitora o evento de rolagem da página
    window.addEventListener('scroll', function () {
        // Verifica a posição de rolagem
        if (window.scrollY >= 200) {
            // Abre o modal quando a posição de rolagem atinge 200 pixels
            $('#modal-news').modal('show');
        }
    });

    // Define um cookie para rastrear que o modal já foi exibido com prazo de expiração de 1 dia
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    document.cookie = "modalShown=true; expires=" + expirationDate.toUTCString();
}

// Fecha o modal quando o usuário clica fora dele ou no botão de fechar
$('#modal-news').on('hidden.bs.modal', function () {
    $('#modal-news').modal('hide');
});

// Fecha o modal quando o usuário clica no botão de fechar
$('#modalCloseButton').click(function () {
    $('#modal-news').modal('hide');
});
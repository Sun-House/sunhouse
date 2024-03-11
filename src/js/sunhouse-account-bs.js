// Verifica se esta logado
// Codigo de validação de Login aqui


// Botao para Sair-Deslogar
function customLogout() {
    $.ajax({
        url: "/no-cache/user/logout"
    }).done(function () {
        // Aqui você pode adicionar qualquer lógica personalizada que deseja executar após a conclusão da requisição AJAX
        console.log("Logout realizado com sucesso!");

        // Agora, redirecione para a página atual
        window.location.reload(); // Isso recarrega a página atual, mantendo-a dinâmica
    });
}
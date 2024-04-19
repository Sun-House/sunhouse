// EM TESTES
function clicarSeWishlistExiste() {
    // Encontrar e clicar no elemento que abre o pop-up da wishlist
    var wishlistPopup = document.querySelector('.glis-popup-link');
    wishlistPopup.click();

    // Esperar um pouco antes de verificar a presença do elemento da wishlist
    setTimeout(function () {
        // Procurar pelo elemento da wishlist
        var wishlistLink = document.querySelector('a[title="Wishlist"]'); // Pode bugar pois é case sensitive

        // Se o elemento da wishlist existir, clique nele
        if (wishlistLink) {
            wishlistLink.click();

            // Informar ao usuario que foi adicionado a wishlist - usar Toastr
            //alert("Verificação concluída!");
        } else {
            console.log("Aqui sera criado o bloco onde cria a wishlist com o nome wishlist");

            // Informar ao usuario que foi criada a lista com nome wishlist e adicionado o produto - usar Toastr
            //alert("Verificação concluída!");
        }

        // Informar ao usuário que a operação foi concluída - usar Toastr
        //alert("Verificação concluída!");
    }, 4000);
}

// Função para executar quando o botão for clicado
function executarVerificacao() {
    clicarSeWishlistExiste();
}

document.getElementById('wishlist_add').addEventListener('click', executarVerificacao);
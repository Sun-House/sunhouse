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
            alert("Produto adicionado a wishlist");
        } else {
            console.log("Aqui sera criado o bloco onde cria a wishlist com o nome wishlist");

            // Informar ao usuario que foi criada a lista com nome wishlist e adicionado o produto - usar Toastr
            alert("Criada a wishlist e produto adicionado");
        }

        // Informar ao usuário que a operação foi concluída - usar Toastr
        //alert("Verificação concluída!");
        toastr.options = {
            closeButton: !0,
            debug: !1,
            newestOnTop: !1,
            progressBar: !0,
            positionClass: "toast-top-center",
            preventDuplicates: !1,
            onclick: null,
            showDuration: "500",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "0",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }, toastr.success("Produto adicionado à sua Lista de Desejos!")
    }, 1000);
}

// Função para executar quando o botão for clicado
function executarVerificacao() {
    clicarSeWishlistExiste();
}

document.getElementById('wishlist_add').addEventListener('click', executarVerificacao);
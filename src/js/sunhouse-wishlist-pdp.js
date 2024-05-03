// EM TESTES

function clicarSeWishlistExiste() {
    // Encontrar e clicar no elemento que abre o pop-up da wishlist
    var wishlistPopup = document.querySelector('.glis-popup-link');
    
    if (wishlistPopup) {
        wishlistPopup.click();
    } else {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }

    // Esperar um pouco antes de verificar a presença do elemento da wishlist
    setTimeout(function () {
        // Procurar pelo elemento da wishlist
        var wishlistLink = document.querySelector('a[title="Wishlist"]'); // Pode bugar pois é case sensitive

        // Se o elemento da wishlist existir, clique nele
        if (wishlistLink) {
            wishlistLink.click();

            // Informar ao usuario que foi adicionado a wishlist - usar Toastr
            // Apenas para o processo de implementacao
            console.log(" Bloco if executado com sucesso - ja tinha a lista e produto foi adicionado");
        } else {
            //console.log("Aqui sera criado o bloco onde cria a wishlist com o nome wishlist");

            // Aqui sera realizada a operação de criação da Wishlist para novos usuarios
            // e sera adicionado o produto em que o usuario tiver clicado para adicionar
            // todas listas terao o nome de 'wishlist' e serao criadas apenas nesse momento
            // codigo abaixo - EM TESTES:


            // Encontrar o input com o título "nome da lista" e definir seu valor como "wishlist"
            var inputNomeLista = document.querySelector('input[title="nome da lista"]');
            if (inputNomeLista) {
                inputNomeLista.value = "wishlist";

                // Encontrar e clicar no elemento <a> com a classe ".glis-submit-new"
                var submitNewLink = document.querySelector('.glis-submit-new');
                if (submitNewLink) {
                    submitNewLink.click();
                    
                    // Apenas para o processo de implementacao
                    console.log(" Bloco else executado com sucesso - nao tinha a lista, ela foi criada e produto foi adicionado");
                } else {
                    console.log("Elemento '.glis-submit-new' não encontrado.");
                }
            } else {
                console.log("Elemento input com título 'nome da lista' não encontrado.");
            }
        }

        // Informar ao usuário que a operação foi concluída
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Produto adicionado à sua Lista de Desejos!"
        });
    }, 1000);
}

// Função para executar quando o botão for clicado
function executarVerificacao() {
    clicarSeWishlistExiste();
}

document.getElementById('wishlist_add').addEventListener('click', executarVerificacao);
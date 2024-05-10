// EM TESTES

window.onload = function() {
    listSkusFromWishlistPdp()
};

// Cria ou adiciona o produto a Lista de Desejos
function wishListAddorCreate() {
    // Encontrar e clicar no elemento que abre o pop-up da wishlist
    var wishlistPopup = document.querySelector('.glis-popup-link');
    
    if (wishlistPopup) {
        wishlistPopup.click();
    } else {
        Swal.fire({
            title: "Faça login para favoritar",
            //text: "Clique abaixo para realizar <b>Login</b> ou <b>Criar a sua Conta</b>. É super rápido!",
            html: "Clique abaixo para realizar <b>Login</b> ou <b>Criar a sua Conta</b>. É super rápido!",
            icon: "info",
            iconColor: "#FFDA00",
            confirmButtonText: "Entre ou Cadastre-se",
            confirmButtonColor: "#F90041"
        }).then(function(result) {
            if(result.isConfirmed) {
                window.location.replace('/login');
            }
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
            swalPopupAdd();
            document.getElementById('wishlist_add').style.display = 'none';
            document.getElementById('wishlist_remove').style.display = 'block';
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
                    swalPopupAdd();
                    document.getElementById('wishlist_add').style.display = 'none';
                    document.getElementById('wishlist_remove').style.display = 'block';
                } else {
                    console.log("Elemento '.glis-submit-new' não encontrado.");
                }
            } else {
                console.log("Elemento input com título 'nome da lista' não encontrado.");
            }
        }
    }, 1000);
}

// Realiza verificacao do ID e outros atributos da Lista de Desejos
function listSkusFromWishlistPdp() {
    var iframe = document.getElementById('iframe_wishlistId');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var listId = iframeDocument.querySelector('.giftlist-body-id').innerHTML;

    var urlGet = `https://www.sunhouse.com.br/no-cache/giftlistv2/getskulist/${listId}/3/10/true`;

    // Função para verificar se o valor existe em qualquer nível do array
    function searchValueInArray(array, value) {
        for (let i = 0; i < array.length; i++) {
            const item = array[i];
            if (typeof item === 'object') {
                if (searchValueInObject(item, value)) {
                    return true;
                }
            } else if (item === value) {
                return true;
            }
        }
        return false;
    }

    // Função para verificar se o valor existe em qualquer nível do objeto
    function searchValueInObject(object, value) {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const item = object[key];
                if (typeof item === 'object') {
                    if (searchValueInObject(item, value)) {
                        return true;
                    }
                } else if (key === 'SkuId' && item === value) {
                    return true;
                }
            }
        }
        return false;
    }

    // Realiza um GET usando fetch() com a URL dinâmica
    fetch(urlGet)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados da requisição');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);
            var skuIdString = document.getElementById('___rc-p-id').getAttribute('value');
            var skuId = parseInt(skuIdString);

            const exists = searchValueInArray(data.Items, skuId);
            if (exists) {
                //console.log(`O valor ${skuId} existe no array.`);
            } else {
                //console.log(`O valor ${skuId} não foi encontrado no array.`);
            }
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}

// Mostra Toast de Add a Lista de Desejos
function swalPopupAdd() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
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
}

// Mostra Toast de Remove da Lista de Desejos
function swalPopupRmv() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "error",
        title: "Produto removido da sua Lista de Desejos!"
    });
}

// Função para executar quando o botão de ADD for clicado
function executarVerificacao() {
    wishListAddorCreate();
}

// Remove produto da Lista de Desejos
function removeFromWishlistPdp() {
    var iframe = document.getElementById('iframe_wishlistId');
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var listId = iframeDocument.querySelector('.giftlist-body-id').innerHTML;

    var skuId = document.getElementById('___rc-p-id').getAttribute('value');
    
    var urlRmv = `https://www.sunhouse.com.br/no-cache/giftlistv2/changewishedamount/${listId}/${skuId}/0`;

    // Realizar a solicitação POST usando fetch() com a URL dinâmica
    fetch(urlRmv, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Se a resposta foi bem-sucedida, recarrega a página
                //console.log('Deu certo');
                swalPopupRmv();
                document.getElementById('wishlist_remove').style.display = 'none';
                document.getElementById('wishlist_add').style.display = 'block';
            } else {
                // Se houve um problema com a resposta, lança um erro
                //console.log('Erro ao remover produto');
                throw new Error('Erro na solicitação POST');
            }
        })
        .catch(error => console.error('Erro:', error));
}

document.getElementById('wishlist_add').addEventListener('click', executarVerificacao);
document.getElementById('wishlist_remove').addEventListener('click', removeFromWishlistPdp);
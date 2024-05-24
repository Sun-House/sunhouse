// Executa a function de Criar o botao de Adicionar ao Carrinho no carregamento do DOM
window.onload = function() {
    loadButtons();
};

// Cria o botao de Adicionar ao Carrinho
function loadButtons() {
    // Delay para executar senao nao cria os botoes
    setTimeout(function () {
        // Selecionar todos os elementos <tr> com o atributo data-bind="foreach: $parent.columns"
        var productTrInput = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"] .inputedit');
        var productTrRmv = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"] .deletethissku')

        // Para cada elemento <tr> encontrado - cria botao de add to cart
        productTrInput.forEach(function (element) {
            // Criar o elemento <button>
            var button = document.createElement("button");

            // Adicionar o evento de clique ao botão
            button.setAttribute("class", "wishlist--add-to-cart-button");
            button.setAttribute("id", "wishlist__add-to-cart-button");

            // Criar o elemento <a> dentro do botão
            var link = document.createElement("a");

            // Adicionar os atributos ao elemento <a>
            link.setAttribute("target", "_self");
            link.setAttribute("class", "wishlist-add-to-cart");
            link.setAttribute("id", "wishlist__add-to-cart");
            link.setAttribute("href", "javascript:void(0)");
            link.setAttribute("style", "display: block");
            //link.textContent = "Adicionar ao Carrinho"; // Adicionar o texto dentro do elemento <a>

            // Adicionar o elemento <a> dentro do botão
            button.appendChild(link);

            // Adicionar o botão após o elemento <tr>
            element.parentNode.insertBefore(button, element.nextSibling);
        });

        // Para cada elemento <tr> encontrado - cria botao custom para remover da wishlist
        productTrRmv.forEach(function (element) {
            // Criar o elemento <button>
            var rmvButton = document.createElement("a");

            // Adicionar o evento de clique ao botão
            rmvButton.setAttribute("class", "wishlist--remove-product-button");
            rmvButton.setAttribute("id", "wishlist__remove-product-button");

            // Adicionar o botão após o elemento <tr>
            element.parentNode.insertBefore(rmvButton, element.nextSibling);
        });

        // Atribui o ouvinte de function a cada botao criado
        var productTr = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"]');
        setTimeout(function () {
            // Para cada elemento <tr> encontrado - aciona botao
            productTr.forEach(function (element) {
                // Adiciona um evento de clique para cada botão de adicionar ao carrinho
                var addToCartButton = element.querySelector('.wishlist--add-to-cart-button');
                var rmvFromListButton = element.querySelector('.wishlist--remove-product-button');

                //var nomeVar = element.querySelector('.checkuncheckthis').getAttribute('value');

                addToCartButton.addEventListener('click', function () {
                    // Encontra o input associado a este botão
                    var input = element.querySelector('.giftlistsku-input-wishedamt');
                    // Obtém o valor do atributo "name" do input
                    var skuId = input.getAttribute('name');
                    // Chama a função que adiciona ao carrinho, passando o skuId
                    addtoCartWishlist(skuId);
                });

                rmvFromListButton.addEventListener('click', function () {
                    // Encontra o input associado a este botão
                    var input = element.querySelector('.checkuncheckthis');
                    // Obtém o valor do atributo "value" do input
                    var skuId = input.getAttribute('value');
                    // Chama a função que remove produto da lista, passando o skuId
                    removeFromWishlist(skuId);
                });

                // Valida se tiver produto indisponivel e o trata
                var productTd = element.querySelectorAll("td");

                productTd.forEach(function(td) {
                    if (td.textContent.trim() === "produto indisponível") {
                        td.style.whiteSpace = "unset";
                        
                        var wishedElement = element.querySelector(".wished");
                        if (wishedElement) {
                            wishedElement.style.display = "none";
                        }
                    } else {
                        console.log('Sem produtos indisponíveis');
                    }
                });
            });
        }, 1000);
        var loadingBg = document.getElementById('loading_bg');
        loadingBg.style.display = 'none';
    }, 2000);
}

// Adiciona ao Carrinho v2 - Native Vtex
function addtoCartWishlist(skuId) {
    $.ajax({
        url: "/api/catalog_system/pub/products/search/?fq=productId:" + skuId,
        method: "GET",
        timeout: 0,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).done((function (a) {
        if (a && a.length > 0 && a[0].items && a[0].items.length > 0 && a[0].items[0].itemId) {
            var skuId = {
                id: a[0].items[0].itemId,
                quantity: 1,
                seller: "1"
            };
            vtexjs.checkout.addToCart([skuId], null, 1).done((function (a) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
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
                    title: "Produto adicionado ao carrinho!"
                });
                //setTimeout(showMinicart, 1000);
            }));
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "Produto indisponível"
            });
        }
    }));
};

function showMinicart() {
    var miniCartBSOffCanvas = document.getElementById('mini-cart__sidebar');

    if (miniCartBSOffCanvas.classList.contains('show')) {
        return;
    }

    var bsOffcanvas = new bootstrap.Offcanvas(miniCartBSOffCanvas);
    bsOffcanvas.show();
}

// Remove produto da Lista assincronamente via comando API POST e recarrega a pagina
function removeFromWishlist(skuId) {
    var userListId = document.getElementById('gid').getAttribute('value');

    // Montar a URL com base nas variáveis
    var url = `https://www.sunhouse.com.br/no-cache/giftlistv2/changewishedamount/${userListId}/${skuId}/0`;

    // Realizar a solicitação POST usando fetch() com a URL dinâmica
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Se a resposta foi bem-sucedida, recarrega a página
                window.location.reload();
                //console.log('Deu certo');
            } else {
                // Se houve um problema com a resposta, lança um erro
                //console.log('Erro ao remover produto');
                throw new Error('Erro na solicitação POST');
            }
        })
        .catch(error => console.error('Erro:', error));
}

// Rola para o topo apos mudar de pagina de wishlist
document.addEventListener('click', function (event) {
    // Verifica se o elemento clicado é o elemento desejado
    if (event.target.matches('.ko-grid-pageLinks *')) {
        // Executa a ação desejada
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        var loadingBg = document.getElementById('loading_bg');
        loadingBg.style.display = 'block';
        loadButtons();
    }
});

// Faz o mesmo que o bloco acima, da parte de executar a function
//var reloadButton = document.querySelector('.ko-grid-pageLinks');    
//reloadButton.addEventListener('click', function () {
    //loadButtons();
//});

// Mostra bloco de Lista Vazia quando a nao tiver produtos na lista
$(document).ready(function () {
    var listaVazia = document.querySelector('.no-product');

    if (listaVazia) {
        var infoLista = document.getElementById('lista_vazia');
        infoLista.style.cssText = 'display: flex !important;';
    }
});
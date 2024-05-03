// ARQUIVO DE TESTES

// EM TESTES
// Esse tava funcionando - apenas nao executa na alteracao da pagina
function observeChanges() {
    setTimeout(function () {
        var target = document.querySelector('.giftlistproductsv2 *');
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    executeCode();
                    console.log('validou a mutacao com sucesso');
                } else {
                    console.log('nao validou a mutacao');
                }
            });
        });
        var config = { childList: true, subtree: true };
        observer.observe(target, config);
    }, 2000);
}

function executeCode() {
    setTimeout(function () {
        var productTrInput = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"] .inputedit');
        
        productTrInput.forEach(function (element) {
            var button = document.createElement("button");
            button.setAttribute("class", "wishlist--add-to-cart-button");
            button.setAttribute("id", "wishlist__add-to-cart-button");

            var link = document.createElement("a");
            link.setAttribute("target", "_self");
            link.setAttribute("class", "wishlist-add-to-cart");
            link.setAttribute("id", "wishlist__add-to-cart");
            link.setAttribute("href", "javascript:void(0)");
            link.setAttribute("style", "display: block");
            link.textContent = "Adicionar ao Carrinho";

            button.appendChild(link);

            element.parentNode.insertBefore(button, element.nextSibling);
        });

        var productTr = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"]');
        setTimeout(function () {
            productTr.forEach(function (element) {
                var addToCartButton = element.querySelector('.wishlist--add-to-cart-button');
                addToCartButton.addEventListener('click', function () {
                    var input = element.querySelector('.giftlistsku-input-wishedamt');
                    var skuId = input.getAttribute('name');
                    addtoCartWishlist(skuId);
                });
            });
        }, 2000);
    }, 2000);
}

// Chame a função executeCode diretamente para garantir que o código seja executado no carregamento inicial
executeCode();
// Chame a função para observar as alterações na estrutura do elemento .giftlistproductsv2
observeChanges();
// EM TESTES


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
        var skuId = {
            id: a[0].items[0].itemId,
            quantity: 1,
            seller: "1"
        };
        vtexjs.checkout.addToCart([skuId], null, 1).done((function (a) {
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
                title: "Produto adicionado ao carrinho!"
            });
        }))
    }));
};

// Rola para o topo apos mudar de pagina de wishlist
document.addEventListener('click', function (event) {
    // Verifica se o elemento clicado é o elemento desejado
    if (event.target.matches('.ko-grid-pageLinks *')) {
        // Executa a ação desejada
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Mostra bloco de Lista Vazia quando a nao tiver produtos na lista
$(document).ready(function () {
    var listaVazia = document.querySelector('.no-product');

    if (listaVazia) {
        var infoLista = document.getElementById('lista_vazia');
        infoLista.style.cssText = 'display: flex !important;';
    }
});
// ARQUIVO DE TESTES


// EM TESTES
document.addEventListener('DOMContentLoaded', observeChanges);

function observeChanges() {
    var target = document.querySelector(".giftlistproductsv2");
    if (!target) return; // Verifica se o elemento target foi encontrado
    var observer, config = {
        childList: true,
        subtree: true
    };
    new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') executeCode();
        });
    }).observe(target, config);
}

function executeCode() {
    setTimeout(function() {
        var productTrInput;
        document.querySelectorAll('tr[data-bind="foreach: $parent.columns"] .inputedit').forEach(function(element) {
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
        setTimeout(function() {
            productTr.forEach(function(element) {
                element.querySelector(".wishlist--add-to-cart-button").addEventListener("click", function() {
                    addtoCartWishlist(element.querySelector(".giftlistsku-input-wishedamt").getAttribute("name"));
                });
            });
        }, 2000);
    }, 2000);
}
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
            }, toastr.success("Produto adicionado ao carrinho!")
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
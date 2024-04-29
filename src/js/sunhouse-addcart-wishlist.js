// Cria o botao de Adicionar ao Carrinho e atribui o ouvinte de function a cada um
//document.addEventListener("DOMContentLoaded", function () {
    // Selecionar todos os elementos <tr> com o atributo data-bind="foreach: $parent.columns"
    var productTrInput = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"] .inputedit');
    var productTr = document.querySelectorAll('tr[data-bind="foreach: $parent.columns"]');

    // Para cada elemento <tr> encontrado - cria botao
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
        link.textContent = "Adicionar ao Carrinho"; // Adicionar o texto dentro do elemento <a>

        // Adicionar o elemento <a> dentro do botão
        button.appendChild(link);

        // Adicionar o botão após o elemento <tr>
        element.parentNode.insertBefore(button, element.nextSibling);
    });

    setTimeout(function () {
        // Para cada elemento <tr> encontrado - aciona botao
        productTr.forEach(function (element) {
            // Adiciona um evento de clique para cada botão de adicionar ao carrinho
            var addToCartButton = element.querySelector('.wishlist--add-to-cart-button');
            addToCartButton.addEventListener('click', function () {
                // Encontra o input associado a este botão
                var input = element.querySelector('.giftlistsku-input-wishedamt');
                // Obtém o valor do atributo "name" do input
                var skuId = input.getAttribute('name');
                // Chama a função que adiciona ao carrinho, passando o skuId
                addtoCartWishlist(skuId);
            });
        });
    }, 1000);
//});

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
}
// NAO ESTA FUNCIONANDO
function fnBuynow() {
    $("body").on("click", "#buy_now", (function (a) {
        a.preventDefault();
        var b = $(this).parents(".shelfProduct").attr("data-id");
        $.ajax({
            url: "/api/catalog_system/pub/products/search/?fq=productId:" + b,
            method: "GET",
            timeout: 0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).done((function (a) {
            var b = {
                id: a[0].items[0].itemId,
                quantity: 1,
                seller: "1"
            };

            window.location.href = '/checkout';
        }))
    }))
}



// 21.03.2024
// Função para adicionar o ouvinte de evento de clique a um elemento
function adicionarOuvinteClique(idElemento, funcaoCallback) {
    var elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.addEventListener('click', funcaoCallback);
    } else {
        console.error('Elemento não encontrado com o ID:', idElemento);
    }
}

// Função de callback para o clique no botão
function cliqueNoBotao(a) {
    a.preventDefault();
    //var b = $(this).parents(".shelfProduct").attr("data-id");
    var skuCode = $(this).closest("li.shelfProduct").attr("data-id");

    $.ajax({
        url: "/api/catalog_system/pub/products/search/?fq=productId:" + skuCode,
        method: "GET",
        timeout: 0,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).done((function (a) {
        var skuCode = {
            id: a[0].items[0].itemId,
            quantity: 1,
            seller: "1"
        };

        //window.location.href = '/checkout';
        alert('Cliquei no botão!' + skuCode);
    }))
}

// Chamando a função para adicionar o ouvinte de evento de clique ao botão
adicionarOuvinteClique('buy_now', cliqueNoBotao);




//USAR ESSE COMO BASE PQ FUNCIONA NO CART:
"use strict";

function fnAddtoCart() {
    $("body").on("click", ".add-to-cart", (function (a) {
        a.preventDefault();
        var b = $(this).parents(".shelfProduct").attr("data-id");
        $.ajax({
            url: "/api/catalog_system/pub/products/search/?fq=productId:" + b,
            method: "GET",
            timeout: 0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).done((function (a) {
            var b = {
                id: a[0].items[0].itemId,
                quantity: 1,
                seller: "1"
            };
            vtexjs.checkout.addToCart([b], null, 1).done((function (a) {
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
        }))
    }))
}
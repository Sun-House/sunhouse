"use strict";
$(document).ready((function () {
    $('<div id="backToTop">\t<span><p>VOLTAR AO</p>\t<strong>TOPO</strong></span>\t<i class="bi bi-arrow-up-circle-fill"></i>\t</div>').appendTo("body"), $(window).scroll((function () {
        $(window).scrollTop() > 300 ? $("#backToTop").addClass("active") : $("#backToTop").removeClass("active")
    })), $("#backToTop").click((function () {
        $("html, body").animate({
            scrollTop: 0
        }, "fast")
    })), $("body").on("click", ".shelfProduct__image span", (function (a) {
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
                window.location = "/checkout"
            }))
        }))
    })), $(".shelf li:not(.shelfProduct)").remove(), 
    
    // funcao nova de insercao de atributo placeholder substitui essa
    $(".fulltext-search-box").val("Buscar Produtos..."),
    $(".fulltext-search-box").focus((function () {
        //"Buscar Produtos..." == $(this).val() && $(this).val(""), $(".fulltext-search-box").focusout((function () {
        //"" == $(this).val() && $(this).val("Buscar Produtos...")
        //}))
        "Buscar Produtos..." == $(this).val() && $(this).val(""); // Limpa o campo se o valor for "Buscar Produtos..."
    })),

    setInterval((function () {
        $(".shelfProduct").each((function () {
            if (0 === $(this).find(".shelfProduct__image.hover img").length && $(this).find(".shelfProduct__image img").clone().appendTo($(this).find(".shelfProduct__image.hover")), 0 > $(this).find(".shelfProduct__price").text().indexOf("Esgotado") && !$(this).hasClass("pc")) {
                $(this).addClass("pc");
                var b = (parseInt($(this).find(".shelfProduct__price-best span").html().replace("R$ ", "").replace(",", "").replace(".", "")) / 1e3).toFixed(2).replace(".", ",");
                $(this).find(".shelfProduct__price-installment").html("10x R$ " + b);
                var a = parseFloat($(this).find(".shelfProduct__price-best span").html().replace("R$ ", "").replace(".", "").replace(",", "."));
                
                // Codigo onde é feito o calculo do desconto a vista para a shelf
                //a >= 10735 ? ((a = ((a = ((a = (a - a / 100 * 2).toFixed(2)) - a / 100 * 2).toFixed(2)) - a / 100 * 3).toFixed(2).replace(".", ",")).length > 6 && (a = a.charAt(0) + a.charAt(1) + "." + a.substr(2)), $(this).find(".shelfProduct__price-best span").html("R$ " + a)) : ((a = ((a = ((a = (a - a / 100 * 2).toFixed(2)) - a / 100 * 2).toFixed(2)) - a / 100 * 3).toFixed(2).replace(".", ",")).length > 6 && (a = a.charAt(0) + "." + a.substr(1)), $(this).find(".shelfProduct__price-best span").html("R$ " + a))
                a>=10753?(a=(a-a/100*7).toFixed(2).replace(".",","),a.length>6&&(a=a.charAt(0)+a.charAt(1)+"."+a.substr(2)),$(this).find(".shelfProduct__price-best span").html("R$ "+a)):(a=(a-a/100*7).toFixed(2).replace(".",","),a.length>6&&(a=a.charAt(0)+"."+a.substr(1)),$(this).find(".shelfProduct__price-best span").html("R$ "+a));
                //
            }
        }))
    }), 500);
    //$(".shelfProduct").each((function () {
        //"" != $(this).find(".shelfProduct__image.hover").html() && $(this).addClass("hover-image")
    //})),
    
    // Ajuste para nao ter hover - over - foto mobile
    if (window.innerWidth > 1200) {
        $(".shelfProduct").each(function () {
            if ("" != $(this).find(".shelfProduct__image.hover").html()) {
                $(this).addClass("hover-image");
            }
        });
    };

    vtexjs.checkout.getOrderForm().done((function (a) {
        $(".header__cart-items").text(a.items.length)
    })), window.innerWidth < 1200 && $(".header > a").insertBefore(".header > .header__search"), setInterval((function () {
        $(".shelfProduct").each((function () {
            $(this).find(".shelfProductImages__flagsleft .flag:visible").length > 1 && 0 === $(this).find(".shelfProductImages__flagsright .flag").length && ($(this).find(".flag.black-friday").length > 0 && $(this).find(".flag.black-friday").appendTo($(this).find(".shelfProductImages__flagsright")), $(this).find(".flag.vitrine-home---lancamento").length > 0 && $(this).find(".flag.vitrine-home---lancamento").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag.designerFlag").length > 0 && $(this).find(".flag.designerFlag").appendTo($(this).find(".shelfProductImages__flagsright")), $(this).find(".flag.pronta-entrega").length > 0 && $(this).find(".flag.pronta-entrega").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag.lp-outlet").length > 0 && $(this).find(".flag.lp-outlet").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag-moveis-sustentaveis").length > 0 && $(this).find(".flag-moveis-sustentaveis").appendTo($(this).find(".shelfProductImages__flagsleft")), 0 === $(this).find(".flag.black-friday").length && $(this).find(".shelfProductImages__flagsleft .flag:visible").length > 1 && $(this).find(".shelfProductImages__flagsleft .flag:visible:eq(1)").appendTo($(this).find(".shelfProductImages__flagsright")))
        }))
    }), 500)
}));

// Funcao que atribui placeholder ao input de busca VTEX e SmartHint
document.addEventListener('DOMContentLoaded', function () {
    var seachInputs = document.querySelectorAll('.fulltext-search-box');

    seachInputs.forEach(function(inputElement) {
        inputElement.setAttribute('placeholder', 'Buscar Produtos...');
    });
});
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
    })), $(".shelf li:not(.shelfProduct)").remove(), $(".fulltext-search-box").val("Encontre Mesas, Cadeiras, Racks..."), $(".fulltext-search-box").focus((function () {
        "Encontre Mesas, Cadeiras, Racks..." == $(this).val() && $(this).val(""), $(".fulltext-search-box").focusout((function () {
            "" == $(this).val() && $(this).val("Encontre Mesas, Cadeiras, Racks...")
        }))
    })), $(".newslettershowed__form > a").click((function () {
        var a = {};
        a.email = $(".newslettershowed__form > input").val(), "" != $(".newslettershowed__form > input").val() ? $(".newslettershowed__form > input").val().match(/[^@]+@[^@]+\.[^@]+/) ? ($("#newsletterClientEmail").val(a.email), $("#newsletterButtonOK").click(), $(".newslettershowed__infos").css({
            width: "auto",
            "margin-top": "14px"
        }), window.innerWidth > 1200 ? $(".newslettershowed__infos div").css({
            width: "auto",
            "line-height": "56px"
        }) : $(".newslettershowed__infos div").css({
            width: "auto",
            "line-height": "auto"
        }), $(".newslettershowed__infos div").text("Obrigado! O seu cadastro foi feito com sucesso."), $(".newslettershowed__form").remove()) : alert("Erro! Verifique os dados inseridos e tente novamente.") : alert("Erro! Preencha seu e-mail.")
    })), window.innerWidth < 1200 ? ($("a.hasSub").attr("href", "javascript:void(0)"), $(".header__menu-dropdown--content:eq(0)").insertAfter(".header__menu-content > ul > li:eq(0)"), $(".header__menu-dropdown--content:eq(1)").insertAfter(".header__menu-content > ul > li:eq(1)"), $(".header__menu-content > ul > li").click((function (a) {
        $(this).next(".header__menu-dropdown--content").slideToggle()
    })), $('<a href="javascript:void(0)" id="closeMobileMenu">X</a>').appendTo(".header__menu"), $(".header__mobilemenu").click((function () {
        $(".header__menu").addClass("active")
    })), $("#closeMobileMenu").click((function () {
        $(".header__menu").removeClass("active")
    }))) : $(".header__menu > div > ul li a").hover((function () {
        if ($(this).hasClass("hasSub")) {
            $(".header__menu-dropdown,.header__menu-dropdown--content").removeClass("active");
            var a = ".header__menu-dropdown--content." + $(this).data("dropdown");
            $(a).addClass("active"), $(".header__menu-dropdown").addClass("active"), $(".header__menu-dropdown").mouseleave((function () {
                $(".header__menu-dropdown,.header__menu-dropdown--content").removeClass("active")
            })), $(".header").hover((function () {
                $(".header__menu-dropdown,.header__menu-dropdown--content").removeClass("active")
            }))
        } else $(".header__menu-dropdown,.header__menu-dropdown--content").removeClass("active")
    })), setInterval((function () {
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
    }), 500), $(".shelfProduct").each((function () {
        "" != $(this).find(".shelfProduct__image.hover").html() && $(this).addClass("hover-image")
    })), vtexjs.checkout.getOrderForm().done((function (a) {
        $(".header__cart-items").text(a.items.length)
    })), window.innerWidth < 1200 && $(".header > a").insertBefore(".header > .header__search"), setInterval((function () {
        $(".shelfProduct").each((function () {
            $(this).find(".shelfProductImages__flagsleft .flag:visible").length > 1 && 0 === $(this).find(".shelfProductImages__flagsright .flag").length && ($(this).find(".flag.black-friday").length > 0 && $(this).find(".flag.black-friday").appendTo($(this).find(".shelfProductImages__flagsright")), $(this).find(".flag.vitrine-home---lancamento").length > 0 && $(this).find(".flag.vitrine-home---lancamento").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag.designerFlag").length > 0 && $(this).find(".flag.designerFlag").appendTo($(this).find(".shelfProductImages__flagsright")), $(this).find(".flag.pronta-entrega").length > 0 && $(this).find(".flag.pronta-entrega").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag.lp-outlet").length > 0 && $(this).find(".flag.lp-outlet").appendTo($(this).find(".shelfProductImages__flagsleft")), $(this).find(".flag-moveis-sustentaveis").length > 0 && $(this).find(".flag-moveis-sustentaveis").appendTo($(this).find(".shelfProductImages__flagsleft")), 0 === $(this).find(".flag.black-friday").length && $(this).find(".shelfProductImages__flagsleft .flag:visible").length > 1 && $(this).find(".shelfProductImages__flagsleft .flag:visible:eq(1)").appendTo($(this).find(".shelfProductImages__flagsright")))
        }))
    }), 500)
}));
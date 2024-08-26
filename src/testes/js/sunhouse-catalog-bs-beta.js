"use strict";

function breadcrumb() {
    vtxctx.departmentName;
    var a = vtxctx.categoryName;
    $("body").hasClass("busca") ? (vtxctx.searchTerm ? $('<li><a href="javascript:void(0)">' + vtxctx.searchTerm + "</a></li>").appendTo(".breadcrumb ul") : $('<li><a href="javascript:void(0)">' + $("title").text() + "</a></li>").appendTo(".breadcrumb ul"), $(".catalogProducts .busca-vazio").length && $(".catalogOptions").hide()) : $("body").hasClass("department")
}

//function notBreak() {
    //var a = 0;
    //$(".shelfProduct").each((function () {
        //var b = $(this).height();
        //b > a && (a = b)
    //})), a < 300 && (a = 386), $(".shelfProduct").css("height", a + "px")
//}

function set() {
    $(".catalogProducts .busca-vazio").length ? ($(".catalogIntro h1").html('<span>Nenhum resultado encontrado para</span> "' + vtxctx.searchTerm + '"'), $(".catalogIntro h1")) : "" !== vtxctx.searchTerm;
}

function filters() {
    $(".search-multiple-navigator .refino > h5").each((function (a) {
        var b = '<div class="filterSelect__title">' + $(this).text().replace(":", "") + "&nbsp;<i class='bi bi-caret-down-fill' id='caretDown_menu_sh'></i></div>",
            c = '<div class="filterSelect__options">' + $(this).parents("fieldset").find("div").html() + "</div>";
        $('<div class="filterSelect">' + b + c + "</div>").appendTo(".catalogFilters > .content"), a !== parseInt($(".search-multiple-navigator .refino > h5").length / 2) && a + 1 !== $(".search-multiple-navigator .refino > h5").length || $(".catalogFilters > .content > .filterSelect").wrapAll("<ul></ul>")
    })), $(".search-multiple-navigator .refino > h5").length > 2 && $('<a class="filterSelect__show show"><span></span> <strong></strong></a>').appendTo(".catalogFilters > .content > ul"), $(".filterSelect__title").click((function () {
        $(this).next(".filterSelect__options").slideToggle("fast")
    })), $("body").on("click", ".filterSelect__show", (function () {
        $(this).hasClass("show") ? ($(".catalogFilters > .content > ul:eq(1)").addClass("showing"), $(".filterSelect__show").removeClass("show").addClass("hide")) : ($(".catalogFilters > .content > ul:eq(1)").removeClass("showing"), $(".filterSelect__show").removeClass("hide").addClass("show"))
    }));
    var a = '<div class="categoriesSelect"><div class="categoriesSelect__title">Categorias</div><div class="categoriesSelect__options"></div></div>';
    $("body").hasClass("department") && $(a).appendTo(".catalogOptions > .content"), $("ul.departList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $("body").hasClass("categoria") && $(a).appendTo(".catalogOptions > .content"), $("ul.catList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $("body").hasClass("subcategoria") && $(a).appendTo(".catalogOptions > .content"), $("ul.subcatList").each((function () {
        $(this).appendTo(".catalogOptions > .content .categoriesSelect__options")
    })), $(".categoriesSelect__title").click((function () {
        $(this).next(".categoriesSelect__options").slideToggle("fast")
    })), $('<div class="orderSelect"><div class="orderSelect__title">Ordenar por&nbsp;<i class="bi bi-caret-down-fill" id="caretDown_menu_sh"></i></div><div class="orderSelect__options"></div></div>').appendTo(".catalogFilters > .content"), $(".orderBy:eq(0) > select:eq(0) > option").each((function () {
        if ("Selecione" != $(this).text()) {
            var a = '<a href="javascript:void(0)" value="' + $(this).attr("value") + '">' + $(this).text() + "</div>";
            $(a).appendTo(".catalogFilters > .content .orderSelect__options")
        }
    })), $(".orderSelect__title").click((function () {
        $(this).next(".orderSelect__options").slideToggle("fast")
    })), $(".catalogFilters input[type='checkbox']").vtexSmartResearch(), $(".orderSelect__options > a").click((function () {
        $(".sub:eq(0) fieldset.orderBy select").val($(this).attr("value")).change()
    })), $(".pager.bottom").appendTo(".catalogOptions:eq(1) .content")
}

function mobile() {
    $('<a href="javascript:void(0)" id="closeFilters"><input class="Xclose" type="radio" id="closeX" checked=""><label class="hambClose" for="closeX"><span class="hambClose-line" id="hambFilter"></span></label></a>').appendTo(".catalogFilters"), $(".catalogOptions:eq(0)").appendTo(".catalogFilters"), $(".catalogOptions:eq(1) .categoriesSelect,.catalogOptions:eq(1) .orderSelect").hide(), $(".catalogProducts .busca-vazio").length || $('<a href="javascript:void(0)" class="btnFilterMobile">Filtrar</a>').insertBefore(".catalogProducts"), $("body").on("click", ".btnFilterMobile", (function () {
        $(".catalogFilters").addClass("active"), $("#closeFilters").click((function () {
            $(".catalogFilters").removeClass("active")
        }))
    })), $(".filterSelect label").click((function () {
        $(".catalogFilters").removeClass("active")
    }))
}
$(document).ready((function () {
    if (breadcrumb(), set(), filters(), window.innerWidth < 1200) mobile();
    else {
        var a = 0;
        $(".shelfProduct").each((function () {
            var b = $(this).height();
            b > a && (a = b)
        })), a < 300 && (a = 386), setInterval((function () {
            $(".shelfProduct").css("height", a + "px"), $(".shelfProduct").each((function () {
                if (0 > $(this).find(".shelfProduct__price").text().indexOf("Esgotado") && 0 > $(this).find(".shelfProduct__price-installment").text().indexOf("10x")) {
                    var a = (parseInt($(this).find(".shelfProduct__price-best span").html().replace("R$ ", "").replace(",", "").replace(".", "")) / 1e3).toFixed(2).replace(".", ",");
                    $(this).find(".shelfProduct__price-installment").html("10x R$ " + a)
                }
            }))
        }), 500)
    }
})), $(document).ready((function () {
    window.innerWidth < 1200 && $(".cards-seo").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: !0,
        infinite: !0,
        autoplaySpeed: 3500,
        arrows: !1,
        dots: !0
    })
})),

// INATIVO - Depreciou
    // Mostra botao pagina anterior caso esteja na pagina 2 ou mais
    $(document).ready(function(){
        var pageNumber = parseInt(document.querySelector(".page-number.pgCurrent").innerHTML);
        var previousBtn = document.querySelector(".pager.bottom .previous");

        if (pageNumber > 2) {
            //console.log(pageNumber + " Mostra!");
            previousBtn.classList.add("previous-active");
        } else {
            //console.log(pageNumber + " Não mostra!");
            previousBtn.classList.remove("previous-active");
        }
    }),
// INATIVO - Depreciou

// Mostra botao pagina anterior quando pagina url for igual ou maior que 2
$(document).ready(function () {
    window.addEventListener('popstate', function() {
        var novaPagina = window.location.hash;
            if (novaPagina !== '#1') {
            setTimeout(function () {
                var allPrevious = document.querySelectorAll(".previous");

                allPrevious.forEach(function(element) {
                    element.classList.add("previous-display");
                });
            }, 2000);
        }
    });
});

// Inicia Popper Tooltips - situacional pois ele inicia por outro arquivo
function iniciaPopper() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
};

// Inicia Popper Tooltips - executa function assim que muda de numero de pagina no catalogo
$(document).ready(function () {
    function carregarPopperURL() {
        setTimeout(function () {
            iniciaPopper();
        }, 2500);
    }
    
    window.addEventListener("popstate", carregarPopperURL);
    window.addEventListener("hashchange", carregarPopperURL);
});

// Cria direcionamento direto ao cart para quando o botão de 'Comprar' é clicado no grid de produtos
function adicionarOuvinteClique(seletor, funcaoCallback) {
    var elementos = document.querySelectorAll(seletor);
    if (elementos.length > 0) {
        elementos.forEach(function (elemento) {
            elemento.addEventListener('click', funcaoCallback);
        });
    } else {
        console.error('Nenhum elemento encontrado com o seletor:', seletor);
    }
}

// Função de callback para o clique no botão
function cliqueNoBotao(a) {
    a.preventDefault();
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

        vtexjs.checkout.addToCart([skuCode], null, 1)

        window.location.href = '/checkout';
    }))
}

adicionarOuvinteClique('#buy_now', cliqueNoBotao);
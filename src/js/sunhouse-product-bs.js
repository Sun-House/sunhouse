"use strict";

function breadcrumb() {
    vtxctx.departmentName, vtxctx.categoryName
}

function verifyShelf() {
    $(".shelfRecomended li").length < 1 && $(".shelfRecomended").hide()
}

function images() {
    function a() {
        var a = setInterval((function () {
            $(".zoomPad #image-main").each((function () {
                if ($(this).attr("src").indexOf("495-495/") > 0) {
                    var b = $(this).attr("src").replace("495-495/", "700-700/");
                    $(this).attr("src", b)
                } else clearInterval(a)
            }))
        }))
    }
    a(), $(".productContent__images .thumbs li a").click((function () {
        a()
    })), $(".thumbs img").each((function () {
        var a = $(this).attr("src").replace("95-95/", "200-200/");
        $(this).attr("src", a)
    }))
}

//function setInfos() { - Removida conforme novo display de precos

//function qty() { - Removida conforme nao esta em uso

function shelfs() {
    $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: !1,
        arrows: !0,
        autoplay: !1
    })
}

function bindEvents() {
    $(".productContent__options-opinions,.productContent__images-dimensions--rating").click((function () {
        $("body,html").animate({
            scrollTop: $("div.opinions").position().top - 104
        })
    }))
}

function setDesigners() {
    $(".productContent__images-flags .flag").each((function () {
        if ($(this).attr("class").indexOf("designer-") >= 0) {
            $(this).addClass("designerFlag");
            var a = $(this).text().split("designer-")[1];
            $(this).wrap('<a href="/designers/' + a + '"></a>'), $(this).css("background-image", 'url("https://sunhouse.vteximg.com.br/arquivos/designer-' + a + '.png")'), $('<a href="/designers/' + a + '" class="productContent__infos-designer"><span class="productContent__infos-designer--photo" style="background-image:url(https://sunhouse.vteximg.com.br/arquivos/designer-' + a + '.png)"></span>Designer: ' + a.replace("-", " ") + "<i></i></a>").insertAfter(".productContent__infos-similars")
        }
    }))
}

function flagsp() {
    $(".productContent__images-flags .flag.black-friday").length > 0 && $(".productContent__images-flags .flag.black-friday").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.vitrine-home---lancamento").length > 0 && $(".productContent__images-flags .flag.vitrine-home---lancamento").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.designerFlag").length > 0 && $(".productContent__images-flags .flag.designerFlag").parent("a").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag.pronta-entrega").length > 0 && $(".productContent__images-flags .flag.pronta-entrega").appendTo(".productContent__images-flags"), $(".productContent__images-flags .flag-moveis-sustentaveis").length > 0 && $(".productContent__images-flags .flag-moveis-sustentaveis").appendTo(".productContent__images-flags")
}

function mobile() {
    $(".productContent__images-dimensions").insertAfter(".productContent__infos"), $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: !0,
        arrows: !1,
        autoplay: !1
    })
}

$(document).ready((function () {
    if (breadcrumb(), images(), setInfos(), ShippingValue(), qty(), bindEvents(), setDesigners(), flagsp(), verifyShelf(), $(".flag.lp-outlet").length > 0) {
        $('<div class="pdpDetalhes"><img src="https://sunhouse.vteximg.com.br/arquivos/pdp-detalhes.png" /></div>').insertAfter(".breadcrumb");
        var a = {
            url: "/api/catalog_system/pub/products/crossselling/similars/" + skuJson.productId,
            method: "GET",
            timeout: 0,
            headers: {
                "Content-Type": "application/json"
            }
        };
        $.ajax(a).done((function (a) {
            a[0].link && $('<a href="' + a[0].link + '" style="display:block;width:335px;height:55px;font-size:18px;font-weight:400;color:#FFF;text-align:center;line-height:55px;background:#E47621;border-radius:4px;margin-top:24px;">VISITAR PRODUTO NOVO</a>}').insertBefore(".productContent__infos-comunication")
        }))
    }
    window.innerWidth < 1200 ? mobile() : shelfs()
})), $(document).ready((function () {
    let btn = document.querySelector(".btnScroll"),
        itn = document.querySelector(".productDescription");
    btn.addEventListener("click", (function () {
        itn.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }))
})), $(document).ready((function () {
    let btnt = document.querySelector(".btnOpn", ".btnOpnBanner"),
        itnt = document.querySelector(".opinions");
    btnt.addEventListener("click", (function () {
        itnt.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    }))
}));

// Calcula frete automatico ao inserir CEP no input
window.addEventListener("load", function () {
    setTimeout(function () {

        // Para calcular o frete assim que for inserido no input
        $('#txtCep').on('keypress', function () {
            var cepValue = $(this).val().replace(/\D/g, ''); // Remove caracteres não numéricos

            if (cepValue.length === 8) {
                $('#btnFreteSimulacao').click();
                displayGratis();
                setInterval(displayGratis, 3000);
            }
        });

    }, 1000); // 1 segundos de espera
});

// Substitui 'Retirada em SP' por 'Gratis' no display da table de precos de frete
function displayGratis() {
    const elementsWithText = document.querySelectorAll("*:not(script):not(style)");
    
    // Itera através dos elementos para encontrar e substituir o texto
    elementsWithText.forEach(element => {
        if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
            const text = element.childNodes[0].textContent;
            const newText = text.replace("Retirada em SP", "Grátis");
            
            if (newText !== text) {
                element.childNodes[0].textContent = newText;
            }
        }
    });
}

// Montagem Service Fn
window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("btnFreteSimulacao").addEventListener("click", function () {
            checarCep();
        });
    }, 1000); // 1 segundos de espera
});

function checarCep() {
    var cep = document.getElementById("txtCep").value;
    var cepNumerico = cep.replace(/\D/g, ''); // Remove não números do CEP
    cepNumerico = parseInt(cepNumerico); // Converte para número inteiro

    const montagemBlock = document.getElementById("openService");
    
    const montagemInfo = document.getElementById("productMontagem-info");

    // Verifica se o CEP está nas faixas especificadas
    if ((cepNumerico >= 1000000 && cepNumerico <= 5999999 && montagemBlock) ||
        (cepNumerico >= 8000000 && cepNumerico <= 8499999 && montagemBlock)) {
        montagemInfo.classList.add("montagem_show");
    } else {
        montagemInfo.classList.remove("montagem_show");
    }
}
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

// Modelo display precos antigo - DESABILITADO
function setInfos() {
    function f(a) {
        var b = (q - a).toFixed(2),
            c = (q / 100).toFixed(2);
        v = (b / c).toFixed(0)
    }
    var q = parseFloat(skuJson_0.skus[0].listPriceFormated.replace("R$ ", "").replace(".", "").replace(",", ".")),
        h = parseFloat(skuJson_0.skus[0].bestPriceFormated.replace("R$ ", "").replace(".", "").replace(",", ".")),
        r = "<span class='productContent__infos-price--listprice'>De: <strong>" + skuJson_0.skus[0].listPriceFormated + "</strong></span>";
    $(".productContent__infos-price").html(r + "<span class='productContent__infos-price--bestprice'>Por:</span>"), "R$ 0,00" === $(".productContent__infos-price--listprice strong").text() && ($(".productContent__infos-price--listprice").hide(), q = h), f(h);
    var m = "<div><p>" + skuJson_0.skus[0].bestPriceFormated + '</p> <span>em <strong>10x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
        e = (h - h / 100 * 2).toFixed(2);
    if (f(e), parseFloat(e) >= 1e4) {
        var a;
        (a = e.toString().replace(".", ",")).length > 6 && (a = a.charAt(0) + a.charAt(1) + "." + a.substr(2));
        var i = "<div><p>R$ " + a + '</p> <span>em <strong>6x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            d;
        f(d = (e - e / 100 * 2).toFixed(2))
    } else {
        var a;
        (a = e.toString().replace(".", ",")).length > 6 && (a = a.charAt(0) + "." + a.substr(1));
        var i = "<div><p>R$ " + a + '</p> <span>em <strong>6x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            d;
        f(d = (e - e / 100 * 2).toFixed(2))
    }
    if (parseFloat(d) >= 1e4) {
        var b;
        (b = d.toString().replace(".", ",")).length > 6 && (b = b.charAt(0) + b.charAt(1) + "." + b.substr(2));
        var j = "<div><p>R$ " + b + '</p> <span>em <strong>3x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            g;
        f(g = (d - d / 100 * 3).toFixed(2))
    } else {
        var b;
        (b = d.toString().replace(".", ",")).length > 6 && (b = b.charAt(0) + "." + b.substr(1));
        var j = "<div><p>R$ " + b + '</p> <span>em <strong>3x</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>",
            g;
        f(g = (d - d / 100 * 3).toFixed(2))
    }
    if (parseFloat(g) >= 1e4) {
        var c;
        (c = g.toString().replace(".", ",")).length > 6 && (c = c.charAt(0) + c.charAt(1) + "." + c.substr(2));
        var k, _ = m + i + j + (k = "<div><p>R$ " + c + '</p> <span><strong>no Pix</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>")
    } else {
        var c;
        (c = g.toString().replace(".", ",")).length > 6 && (c = c.charAt(0) + "." + c.substr(1));
        var k, _ = m + i + j + (k = "<div><p>R$ " + c + '</p> <span><strong>no Pix</strong></span><span class="installmentBenefit"><strong>' + v + "%</strong></span></div>")
    }
    $(".productContent__infos-installment").html(_);
    var s = $(".productContent__images #image img:eq(0)").attr("src"),
        t = (document.domain, window.location);
    $(".productContent__options-socials--pinar a").attr("href", "http://pinterest.com/pin/create/button/?url=" + t + "&media=" + s);
    var u = "OlÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡, seja bem vindo a Sun House. Este ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© o nosso WhatsApp do Atendimento ao Cliente e TeleVendas.\n Por aqui poderÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ tirar dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âºvidas sobre produtos que estÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â£o sendo anunciados em nosso site e fazer o orÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§amento completo de acordo com sua busca.\n Temos mais de 3.000 metros quadrados em nossas lojas e mais de 6.000 produtos para lhe atender!\n EndereÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§os e Telefones: Rua Teodoro Sampaio, 1587 -> 11 - 3082-2044\n Rua Teodoro Sampaio, 1749 -> 11 - 2503-2996\n OUTLET: Rua Doutor Gabriel Covelli, 58, Casa Verde\n VocÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© estava visualizando: " + skuJson_0.name;
    $(".productContent__options-socials--whatsapp a").attr("href", "https://api.whatsapp.com/send?phone=5511994877664&text=" + u), $(".productContent__infos-buyButton .buy-button-ref").text("ADICIONAR AO CARRINHO");
    var v, n, o, w = setInterval((function () {
            if ($(".productContent__infos-freight fieldset > .prefixo").length > 0) {
                $(".frete-calcular").appendTo(".productContent__infos-freight fieldset > .prefixo");
                var a = '<div class="moreQty">+</div>';
                $('<div class="minusQty">-</div>').insertBefore(".productContent__infos-freight fieldset > .quantity > input"), $(a).insertAfter(".productContent__infos-freight fieldset > .quantity > input"), 1 == parseInt($(".quantity > input").val()) && $(".minusQty").addClass("disabled"), $(".freight-zip-box").attr("placeholder", "Informe o CEP"), clearInterval(w)
            }
        })),
        p = "",
        l = "";
    $(".productInfos").text().indexOf("Kilogramas") > -1 ? l = "kg" : $(".productInfos").text().indexOf("Gramas") > -1 && (l = "g"), $(".productContent__images-dimensions--weight strong:last").text($(".lblPesoReal").text().replace(",00", "") + l), 1 == $(".notifyme").is(":visible") && ($(".notifyme-client-name").val("UsuÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡rio"), $(".productContent__infos-price,.productContent__infos-installment").hide()), $(".productContent__infos-similars").find(".outras-cores").length <= 0 && $(".productContent__infos-similars").hide()
}

function qty() {
    $("body").on("click", ".quantity .minusQty", (function () {
        2 == parseInt($(".quantity > input").val()) && $(".minusQty").addClass("disabled"), parseInt($(".quantity > input").val()) > 1 && $(".quantity > input").val(parseInt($(".quantity > input").val()) - 1)
    })), $("body").on("click", ".quantity .moreQty", (function () {
        1 == parseInt($(".quantity > input").val()) && $(".minusQty").removeClass("disabled"), $(".quantity > input").val(parseInt($(".quantity > input").val()) + 1)
    }))
}

function shelfs() {
    $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: !1,
        arrows: !0,
        autoplay: !1
    })
}

//function bindEvents() {
    //$(".productContent__options-opinions,.productContent__images-dimensions--rating").click((function () {
        //$("body,html").animate({
            //scrollTop: $("div.opinions").position().top - 104
        //})
    //}))
//}

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

//function mobile() {
    //$(".productContent__images-dimensions").insertAfter(".productContent__infos"), $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        //slidesToShow: 1,
        //slidesToScroll: 1,
        //dots: !0,
        //arrows: !1,
        //autoplay: !1
    //})
//}

//function mobile() {
    //$(".productContent__images-dimensions").insertAfter(".productContent__infos").slick({
        //slidesToShow: 1,
        //slidesToScroll: 1,
        //dots: !0,
        //arrows: !1,
        //autoplay: !1
    //})
//}

function mobile() {
    //$(".productContent__images-dimensions").insertAfter(".productContent__infos");
    $(".productContent__images-dimensions").insertAfter("#medidasNEW");
}

// Ajusta quantidades de produtos da Vitrine SmartHint
function vitrinePdpSmartHint() {
    $(".shelfRecomended ul,.shelfQCCT ul,.shelfRecents ul").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: !0,
        arrows: !1,
        autoplay: !1
    })
}

$(document).ready((function () {
    //if (breadcrumb(), images(), ShippingValue(), bindEvents(), setDesigners(), flagsp(), verifyShelf(), $(".flag.lp-outlet").length > 0) {
    if (breadcrumb(), images(), ShippingValue(), setDesigners(), flagsp(), verifyShelf(), $(".flag.lp-outlet").length > 0) {
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
    //window.innerWidth < 1200 ? mobile() : shelfs()

    window.innerWidth < 1200 ? [mobile(), vitrinePdpSmartHint()] : shelfs()

    //window.innerWidth < 1200 ? [vitrinePdpSmartHint()] : shelfs()

    //if (window.innerWidth < 1200) {
        //mobile();
        //vitrinePdpSmartHint();
    //} else {
        //shelfs();
    //}
}));

//, $(document).ready((function () {
    //let btn = document.querySelector(".btnScroll"),
        //itn = document.querySelector(".productDescription");
    //btn.addEventListener("click", (function () {
        //itn.scrollIntoView({
            //block: "start",
            //behavior: "smooth"
        //})
    //}))
//})), $(document).ready((function () {
    //let btnt = document.querySelector(".btnOpn", ".btnOpnBanner"),
        //itnt = document.querySelector(".opinions");
    //btnt.addEventListener("click", (function () {
        //itnt.scrollIntoView({
            //block: "start",
            //behavior: "smooth"
        //})
    //}))
//}));

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
        var btnFreteSimulacao = document.getElementById("btnFreteSimulacao");
        if (btnFreteSimulacao) {
            btnFreteSimulacao.addEventListener("click", function () {
                checarCep();
            });
        }
    }, 1000); // 1 segundo de espera
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

// Oculta Montagem quando tiver o atributo de montagem apontado para Nao
// Verifica se as frases existem no DOM
function verificarFrasesMont() {
    const frases = [
        "Não Necessita Montagem",
        "Necessita Montagem? Não (produto entregue montado)",
        "Necessita Montagem? Nao (produto entregue montado)",
        "NECESSITA MONTAGEM? NAO (PRODUTO ENTREGUE MONTATO)"
    ];

    for (let i = 0; i < frases.length; i++) {
        const frase = frases[i];
        const elementos = document.querySelectorAll("*");
        let encontrouFrase = false; // Flag para indicar se a frase foi encontrada

        for (let j = 0; j < elementos.length; j++) {
            const elemento = elementos[j];
            
            if (elemento.textContent.trim() === frase) {
                encontrouFrase = true; // Indica que a frase foi encontrada
                break; // Para a verificação para esta frase
            }
        }

        if (encontrouFrase) {
            const ocultaCardMont = document.querySelectorAll('.productMontagem__nao-mostra');
            ocultaCardMont.forEach(cardMont => {
                //cardMont.style.display = "none";
                cardMont.style.setProperty('display', 'none', 'important');
            });
            //console.log('Ocultado pois produto é entregue montado!');
            return; // Sai da função após ocultar o elemento
        } //else {
            //console.log('Não oculta pois produto é entregue desmontado!');
        //}
    }
}

//document.addEventListener('DOMContentLoaded', verificarFrasesMont);
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(verificarFrasesMont, 1000);
});

// Mostra botao Wpp quando produto esgotado
window.addEventListener("load", function () {
    setTimeout(function () {
        // Verifica se o elemento com a classe .unavailable-button possui display: block no HTML
        var unavailableButton = document.querySelector('.unavailable-button');

        if (unavailableButton && getComputedStyle(unavailableButton).display === 'block') {
            // Se verdadeiro, adiciona a classe showWpp ao elemento .unavailable-whatsapp-button
            var whatsappButton = document.querySelector('.unavailable-whatsapp-button');

            if (whatsappButton) {
                whatsappButton.classList.add('showWpp');
            }
        }
    }, 1000); // 1 segundo de espera
});

// Abre direto a aba de avaliacoes quando clica no link Ver todas avaliacoes
//$(document).ready(function () {
    //$("#all_opinions, .productContent__options, .productContent__images-dimensions--rating").click(function () {
        //$("#rate-tab").tab("show");
    //});
//});

//
//$(document).ready(function () {
    //if ($(window).width() < 1199) {
        // Product Description Tab
        //$("#btnScrollSt").click(function () {
            // Ativa a tab descricao produto
            //$("#descricao-accordion").collapse("show");

            // Rola a tela até a posição da tab
            //$('html, body').animate({
                //scrollTop: $("#descricao-accordion").offset().top - 150
            //}, 100);
        //});

        // Product Rate Tab
        //$("#all_opinions, .productContent__options, .productContent__images-dimensions--rating").click(function () {
            // Ativa a tab avaliacoes
            //$("#rate-accordion").collapse("show");

            // Rola a tela até a posição da tab
            //$('html, body').animate({
                //scrollTop: $("#rate-accordion").offset().top - 150
            //}, 100);
        //});
    //} else {
        // Product Description Tab
        //$("#btnScrollSt").click(function () {
            // Ativa a tab descricao produto
            //$("#descricao-tab").tab("show");

            // Rola a tela até a posição da tab
            //$('html, body').animate({
                //scrollTop: $("#descricao-tab").offset().top - 150
            //}, 100);
        //});

        // Product Rate Tab
        //$("#all_opinions, .productContent__options, .productContent__images-dimensions--rating").click(function () {
            // Ativa a tab avaliacoes
            //$("#rate-tab").tab("show");

            // Rola a tela até a posição da tab
            //$('html, body').animate({
                //scrollTop: $("#rate-tab").offset().top - 150
            //}, 100);
        //});
    //}
//});

// ainda nao testado - criado pelo chat
$(document).ready(function () {
    // Função para rolar a página até um elemento
    function scrollToElement(element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top - 150
        }, 100);
    }

    if ($(window).width() < 1199) {
        // Botão para a descrição do produto
        $("#btnScrollSt").click(function () {
            // Abre o accordion da descrição do produto
            $("#descricao-accordion").collapse("show");
            // Rola a tela até a posição do accordion
            scrollToElement("#descricao-accordion");
        });

        // Botões para abrir a tab de avaliações do produto
        $("#all_opinions, .productContent__images-dimensions--rating").click(function () {
            // Abre o accordion de avaliações
            $("#rate-accordion").collapse("show");
            // Rola a tela até a posição do accordion
            scrollToElement("#rate-accordion");
        });
        
        $(".productContent__options").click(function () {
            // Abre o accordion de avaliações
            $("#rate-accordion").collapse("show");
            // Rola a tela até a posição do accordion
            scrollToElement(".ts-customer-questions");
        });
    } else {
        // Botão para a descrição do produto
        $("#btnScrollSt").click(function () {
            // Mostra a tab de descrição do produto
            $("#descricao-tab").tab("show");
            // Rola a tela até a posição da tab
            scrollToElement("#descricao-tab");
        });

        // Botões para abrir a tab de avaliações do produto
        //$("#all_opinions, .productContent__options, .productContent__images-dimensions--rating").click(function () {
        $("#all_opinions, .productContent__images-dimensions--rating").click(function () {
            // Mostra a tab de avaliações
            $("#rate-tab").tab("show");
            // Rola a tela até a posição da tab
            scrollToElement("#rate-tab");
        });

        $(".productContent__options").click(function () {
            // Abre o accordion de avaliações
            $("#rate-tab").tab("show");
            // Rola a tela até a posição do accordion
            scrollToElement(".ts-customer-questions");
        });
    }
});

// Mostra info de Marca e Loja do produto - Marketplace
//window.addEventListener("load", function () {
    setTimeout(function () {
        var itemComDados = dataLayer.find(function (item) {
            return item.productBrandName;
        });

        const brandLinked = document.getElementById("product_brand_link");
        //var brandDisplayInfo = document.querySelectorAll(".brandNameDisplay");

        function removerAcentos(str) {
            return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }

        if (itemComDados && itemComDados.productBrandName && !(itemComDados.productBrandName == "Sun House")) {
            var brandName = itemComDados.productBrandName;
            var formattedBrandName = removerAcentos(brandName).replace(/\s+/g, '-');
            
            // Verifica se a variável formattedBrandName é igual a "OR-Design"
            if (formattedBrandName === "OR-Design") {
                // Seleciona o elemento <a> pelo seletor de classe
                var buyButton = document.querySelector('.buy-button-ref');
                // Obtém o valor atual do atributo href
                var hrefValue = buyButton.getAttribute('href');
                // Substitui "sc=1" por "sc=2" no valor do atributo href
                var newHrefValue = hrefValue.replace('sc=1', 'sc=2');
                // Define o novo valor do atributo href
                buyButton.setAttribute('href', newHrefValue);
                console.log('Href da OR:', newHrefValue);
            }

            brandLinked.href = "https://www.sunhouse.com.br/lojista/" + formattedBrandName;
            brandLinked.textContent = brandName;
            //brandDisplayInfo.textContent = brandName;
        } else {
            var brandNotLinked = document.getElementById("brand_sunhouse_notlinked");

            brandNotLinked.style.display = 'block';
            brandLinked.style.display = 'none';
        }
    }, 2000);
//});

// Move Ficha Tecnica antiga do MS para novo display de Ficha Tecnica
$(document).ready(function () {
    var oldFicha = document.getElementById("prodEspec");

    // Verifica se o elemento com ID "prodEspec" existe no DOM
    if (oldFicha !== null) {
        // Realiza ação apenas se o elemento existir
        document.getElementById("colDois").appendChild(oldFicha);
    }
});

// Move os elementos das abas de Descricao do Produto - Desk e Mobile
function moveElementos() {
    const prodDesc = document.getElementById('product-description');
    const prodFicha = document.getElementById('product-ficha');
    //const prodDim = document.getElementById('product-dimensions');
    const prodRate = document.getElementById('product-rate');

    if (window.matchMedia('(max-width: 1199px)').matches) {
        // Verifica se a largura da tela é no máximo 1199px
        // Move os elementos para um novo local no DOM
        const prodDescMob = document.getElementById('mobile_product-description');
        const prodFichaMob = document.getElementById('mobile_product-ficha');
        //const prodImgDimMob = document.getElementById('mobile_product-dimensions');
        const prodRateMob = document.getElementById('mobile_product-rate');

        prodDescMob.appendChild(prodDesc);
        prodFichaMob.appendChild(prodFicha);
        //prodImgDimMob.appendChild(prodDim);
        prodRateMob.appendChild(prodRate);
    } else {
        // Se a largura da tela for maior que 1199px, restaura a posição original dos elementos
        const prodDescDesk = document.getElementById('descricao-produto');
        const prodFichaDesk = document.getElementById('ficha-produto');
        //const prodDimDesk = document.getElementById('medidas-produto');
        const prodRateDesk = document.getElementById('rate-produto');

        prodDescDesk.appendChild(prodDesc);
        prodFichaDesk.appendChild(prodFicha);
        //prodDimDesk.appendChild(prodDim);
        prodRateDesk.appendChild(prodRate);
    }
}

// Chama o Bloco acima quando a janela é carregada e quando sua largura é alterada
window.addEventListener('load', moveElementos);
window.addEventListener('resize', moveElementos);


// Reposicionamento Mobile - Outras Cores - Bloco Medidas
function moveOutrasCores() {
    if ($(window).width() <= 1199) {
        $("#productContent__infos-similars-block").appendTo(".productContent__outras-cores-mobile");
    } else {
        // Volte o conteúdo para o local original se a largura for maior que 1199px
        $("#productContent__infos-similars-block").appendTo(".productContent__infos-similars");
    }
}

$(document).ready(function () {
    moveOutrasCores();
});

$(window).resize(function () {
    moveOutrasCores();
});

// Exibe texto de outras cores de acordo com presenca da Shelf Outras Cores
$(document).ready(function () {
    var shelfOutrasCores = document.querySelector(".outras-cores");

    if (shelfOutrasCores) {
        document.getElementById("title_outras-cores").style.display = "block";
    }
});

// Obtem e mostra codigo do produto abaixo do H1 de titulo do mesmo
$(document).ready(function () {
    var skuElement = document.getElementById("___rc-p-sku-ids");
    var codigoProdutoElement = document.getElementById("codigo_produto");

    if (skuElement && codigoProdutoElement) {
        var skuValue = skuElement.value;

        codigoProdutoElement.textContent = skuValue;

        //console.log(skuValue);
    } else {
        //console.log("Erro ao encontrar e mostrar Codigo do Produto!");
        codigoProdutoElement.textContent = 'Erro!';
    }
});

//
//$(document).ready(function () {
    //

        //window.addEventListener('load', function() {
            // Seleciona o elemento a ser copiado
            //var tableMeasures = document.getElementById('medidas-produto-desktop');
            
            // Cria uma cópia do elemento
            //var tableMeasuresCloned = tableMeasures.cloneNode(true);
            
            // Insere a cópia no destino desejado
            //document.getElementById('mobile_product-measures').appendChild(clonedElement);
        //});

    //
//});

// Funcoes de criacao do novo display de fotos do produto
function imageWrapper() {
    // Seletor para os elementos <a> que contêm o atributo 'zoom'
    const zoomLinks = document.querySelectorAll('.apresentacao #show .thumbs li a#botaoZoom');
    
    // Seletor para o contêiner onde os novos elementos serão adicionados
    const carouselInner = document.querySelector('.productContent__product-images .productContent__product-images_main-block .carousel-inner');

    // Verifica se os elementos existem antes de prosseguir
    if (!zoomLinks || !carouselInner) {
        console.error('Fn imageWrapper - Elementos necessários não foram encontrados no DOM.');
        return;
    }

    zoomLinks.forEach((link, index) => {
        // Captura o valor do atributo 'zoom'
        const zoomSrc = link.getAttribute('zoom');
        
        // Cria um novo elemento 'div' com a classe 'carousel-item'
        const carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item', 'zoom-container');
        
        // Adiciona a classe 'active' ao primeiro elemento criado
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        // Cria um novo elemento 'div' de zoom para o 'carousel-item'
        const zoomDiv = document.createElement('div');
        zoomDiv.classList.add('zoom-overlay');

        // Cria um novo elemento 'img' e define os atributos necessários
        const imgElement = document.createElement('img');
        imgElement.classList.add('d-block', 'w-100', 'shadow-1-strong', 'rounded', 'img-fluid', 'zoom-img');
        imgElement.id = 'zoomable-image';
        imgElement.setAttribute('src', zoomSrc);

        // Adiciona o elemento 'img' dentro da 'div' com a classe 'carousel-item'
        zoomDiv.appendChild(imgElement);

        // Adiciona a 'div' com a classe 'zoom-overlay' dentro do 'carousel-item'
        carouselItem.appendChild(zoomDiv);

        // Adiciona a 'div' com a classe 'carousel-item' dentro do 'carousel-inner'
        carouselInner.appendChild(carouselItem);
    });
}

function thumbsWrapper() {
    // Seletor para os elementos <a> que contêm o atributo 'zoom'
    const imgSrc = document.querySelectorAll('.apresentacao #show .thumbs li a#botaoZoom img');

    // Seletor para o contêiner onde os novos elementos serão adicionados
    const carouselInner = document.querySelector('.productContent__product-images .productContent__product-images_thumbnails .carousel-inner');

    // Verifica se os elementos existem antes de prosseguir
    if (!imgSrc.length) {
        console.error('Fn thumbsWrapper - Nenhum elemento com o seletor especificado foi encontrado.');
        return;
    }
    if (!carouselInner) {
        console.error('Fn thumbsWrapper - Elemento do carrossel não foi encontrado.');
        return;
    }

    let currentCarouselItem = null;
    let row = null;
    let slideIndex = 0;

    // Conjunto para rastrear src únicos
    const srcSet = new Set();

    imgSrc.forEach((link, index) => {
        // Captura o valor do atributo 'src'
        const imageSrc = link.getAttribute('src');

        // Verifica se o src já foi adicionado
        if (srcSet.has(imageSrc)) {
            return; // Se já estiver no conjunto, não cria um novo item
        }

        // Adiciona o src ao conjunto para rastreamento
        srcSet.add(imageSrc);

        // Se for o início de um novo grupo de até 3 itens, cria um novo 'carousel-item' e 'row'
        if (index % 3 === 0) {
            // Se não for o primeiro grupo, adiciona o 'carousel-item' ao contêiner
            if (currentCarouselItem) {
                carouselInner.appendChild(currentCarouselItem);
            }

            // Cria um novo 'carousel-item'
            currentCarouselItem = document.createElement('div');
            currentCarouselItem.classList.add('carousel-item');

            // Adiciona a classe 'active' ao primeiro item criado
            if (index === 0) {
                currentCarouselItem.classList.add('active');
            }

            // Cria uma nova 'row'
            row = document.createElement('div');
            row.classList.add('row');

            // Adiciona a 'row' ao 'carousel-item'
            currentCarouselItem.appendChild(row);
        }

        // Cria um novo 'col' e adiciona ao 'row'
        const col = document.createElement('div');
        col.classList.add('col');

        // Cria um novo 'button'
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-target', '#product_image_carousel');
        button.setAttribute('data-bs-slide-to', slideIndex++);
        button.setAttribute('aria-label', `Slide ${slideIndex}`);
        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }

        // Cria um novo 'img'
        const imgElement = document.createElement('img');
        imgElement.classList.add('d-block', 'w-100', 'shadow-1-strong', 'rounded', 'img-fluid');
        imgElement.setAttribute('src', imageSrc);

        // Adiciona o 'img' ao 'button'
        button.appendChild(imgElement);

        // Adiciona o 'button' ao 'col'
        col.appendChild(button);

        // Adiciona o 'col' ao 'row'
        row.appendChild(col);
    });

    // Adiciona o último 'carousel-item' ao contêiner, se necessário
    if (currentCarouselItem) {
        carouselInner.appendChild(currentCarouselItem);
    }
}

function carouselOcultaSetas() {
    // Oculta todas setas em caso de 1 foto - e apenas setas das thumbs em caso de 2-3 fotos
    var carousel = document.querySelector('.productContent__product-images');
    var carouselThumbs = document.getElementById('product_imageThumbs_carousel');
    var items = carouselThumbs.querySelectorAll('.carousel-item .col');

    if (items.length === 1) {
        var controls = carousel.querySelectorAll('.carousel-control');
        controls.forEach(function (control) {
            control.style.display = 'none';
        });
    } else if (items.length === 2 || items.length === 3) {
        var thumbControls = carousel.querySelectorAll('.control-thumb');
        thumbControls.forEach(function (control) {
            control.style.display = 'none';
        });
    }
}

function zoomProductImage() {
    const images = document.querySelectorAll('.zoom-img');

    images.forEach(image => {
        if (window.innerWidth >= 1200) {
            const container = image.closest('.zoom-container');
            const overlay = container.querySelector('.zoom-overlay');

            let isZoomed = false;

            // Função para calcular a posição do transformOrigin
            function calculatePosition(e, type) {
                const {
                    left,
                    top,
                    width,
                    height
                } = container.getBoundingClientRect();

                // Ajustes para a margem de segurança
                const margin = -150; // Ajuste conforme necessário
                const adjustedLeft = left - margin;
                const adjustedTop = top - margin;
                const adjustedWidth = width + (2 * margin);
                const adjustedHeight = height + (2 * margin);

                let clientX, clientY;

                if (type === 'mouse') {
                    clientX = e.clientX;
                    clientY = e.clientY;
                } else if (type === 'touch') {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                }

                const x = ((clientX - adjustedLeft) / adjustedWidth) * 100;
                const y = ((clientY - adjustedTop) / adjustedHeight) * 100;

                image.style.transformOrigin = `${x}% ${y}%`;
            }

            // Eventos de mouse
            container.addEventListener('mousemove', (e) => {
                if (isZoomed) {
                    calculatePosition(e, 'mouse');
                }
            });

            container.addEventListener('mouseleave', () => {
                if (isZoomed) {
                    image.style.transformOrigin = 'center center';
                    image.style.transform = 'scale(1)';
                    container.classList.remove('zoom-active');
                    isZoomed = false;
                }
            });

            container.addEventListener('click', () => {
                isZoomed = !isZoomed;
                if (isZoomed) {
                    container.classList.add('zoom-active');
                    image.style.transform = 'scale(2)';
                } else {
                    container.classList.remove('zoom-active');
                    image.style.transform = 'scale(1)';
                    image.style.transformOrigin = 'center center';
                }
            });
        }
    });
}

// Carrega funcoes de criacao do novo display de fotos do produto
window.addEventListener('load', function () {
    imageWrapper();
    thumbsWrapper();
    zoomProductImage();
    carouselOcultaSetas();
});

// Manipula elementos do Price Block New
function priceBlock() {
    const shouldExecuteBlocks = document.querySelector(".plugin-preco");
    //const shouldExecuteBlocksCheckPrice = document.querySelector(".skuListPrice").textContent;
    var shouldExecuteBlocksCheckGlobal = document.querySelector(".skuListPrice");

    if (shouldExecuteBlocks || shouldExecuteBlocksCheckGlobal) {
        // Movimentacao de elementos para seus devidos locais de display
        $(document).ready(function () {
            // Obtém referência para o elemento a ser movido
            const elementToMove = document.getElementById("product-name-rmv");
            const fullPriceMove = document.querySelector(".skuListPrice");
            const creditPriceMove = document.querySelector(".skuBestPrice");

            // Obtém referência para o destino do elemento
            const destination = document.getElementById("product-name");
            const destinationFprice = document.querySelector(".full_price");
            const destinationCprice = document.querySelector(".credit_price");

            // Move o elemento para o destino
            destination.appendChild(elementToMove);

            // Verifica se o produto tem preco de lista - Com Flag promocional
            var shouldExecuteBlocksCheck = document.querySelector(".skuListPrice");

            //if (shouldExecuteBlocksCheck !== "R$ 0,00") {
            //if (shouldExecuteBlocksCheck && shouldExecuteBlocksCheckPrice !== "R$ 0,00") {
            if (shouldExecuteBlocksCheck) {
                destinationFprice.appendChild(fullPriceMove);
            }

            destinationCprice.appendChild(creditPriceMove);
        });

        // Copia valor em 10x para os devidos displays
        $(document).ready(function () {
            const movePriceFull = document.querySelector(".skuPrice");

            const conteudoPriceFull = movePriceFull.innerHTML;

            var priceFullDestination = document.querySelectorAll(".final_price_3");

            priceFullDestination.forEach(function (priceCub) {
                priceCub.innerHTML = conteudoPriceFull;
            });
        });

        // Move elementos com o valor de cada parcela de acordo com a quantidade da mesma
        $(document).ready(function () {
            function moveElements() {
                const liElements = document.querySelectorAll(".other-payment-method-American");

                liElements.forEach(li => {
                    const className = li.classList.item(1);
                    if (className.includes("Express-")) {
                        const numero = Number(className.split("-")[1]);
                        const elementoDestino = document.getElementById(`formated-price-${numero}`);
                        const strongElement = li.querySelector("strong");

                        if (elementoDestino && strongElement) {
                            let percentSubtraction = 0;

                            if (numero >= 1 && numero <= 3) {
                                percentSubtraction = 3.96;
                            } else if (numero >= 4 && numero <= 6) {
                                percentSubtraction = 2;
                            }

                            const originalValue = parseFloat(strongElement.textContent.replace(/[^\d,]/g,
                                "").replace(",", "."));
                            const newValue = originalValue * (1 - percentSubtraction / 100);

                            const formattedValue = newValue.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            });

                            strongElement.textContent = formattedValue;
                            elementoDestino.appendChild(strongElement);
                        }
                    }
                });
            }
            moveElements();

            setTimeout(function () {
                // Obtém o valor do elemento com ID "formated-price-10"
                const formatedPrice = document.getElementById("formated-price-10").textContent;
                const priceInstallment = document.getElementById("installment__formated-price-10");

                // Define o valor no elemento com ID "installment__formated-price-10"
                priceInstallment.textContent = formatedPrice;
            }, 1000); // 1 segundos de espera
        });

        // Calculo preco final com desconto progressivo e alocacao para os elementos de display
        $(document).ready(function () {
            function converterValor(valorTexto) {
                const valorNumerico = parseFloat(valorTexto.replace("R$", "").replace(".", "").replace(",", "."));
                return valorNumerico;
            }

            function formatarValor(valor) {
                return valor.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }

            function calcularDescontos(valorAlvo) {
                const desconto1 = valorAlvo * 0.0396;
                const valorComDesconto1 = valorAlvo - desconto1;

                const desconto2 = valorAlvo * 0.02;
                const valorComDesconto2 = valorAlvo - desconto2;

                return [valorAlvo, valorComDesconto1, valorComDesconto2];
            }

            // Obtendo o elemento que contém o valor alvo
            const valorElement = document.querySelector(".skuBestPrice");
            const valorTexto = valorElement.textContent.trim();

            // Convertendo o valor de texto para numérico
            const valorAlvo = converterValor(valorTexto);

            // Calculando os descontos e armazenando os resultados na lista
            const resultados = calcularDescontos(valorAlvo);

            // Selecionando todos os elementos com as classes "final_price_1" e "final_price_2"
            const finalPriceElements1 = document.querySelectorAll(".final_price_1");
            const finalPriceElements2 = document.querySelectorAll(".final_price_2");

            // Atribuindo os valores calculados a todos os elementos
            finalPriceElements1.forEach((element) => {
                element.textContent = `R$ ${formatarValor(resultados[1])}`;
            });

            finalPriceElements2.forEach((element) => {
                element.textContent = `R$ ${formatarValor(resultados[2])}`;
            });
        });

        // Calcula valor a vista e move para o Price Block New
        // Função para calcular a subtração de 7% do valor em moeda
        function calcularSubtracao(valor) {
            const taxaSubtracao = 0.07;
            return valor - (valor * taxaSubtracao);
        }

        // Função para formatar o valor para o formato de moeda (R$)
        function formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        }

        // Obter o valor do elemento HTML, realizar o cálculo e alocar o valor no elemento com a classe ".slip_price"
        (function () {
            const elementoValorOriginal = document.querySelector(".skuPrice");
            const elementoValorCalculado = document.querySelector(".slip_price");

            // Obtém o valor original do elemento e remove o símbolo 'R$' e outros caracteres não numéricos
            const valorOriginalTexto = elementoValorOriginal.innerText.trim().replace("R$", "").replace(".", "")
                .replace(",", ".");
            const valorOriginalNumerico = parseFloat(valorOriginalTexto);

            // Verifica se o valor é válido
            if (!isNaN(valorOriginalNumerico)) {
                // Calcula o novo valor após a subtração de 7%
                const valorCalculado = calcularSubtracao(valorOriginalNumerico);

                // Formata o valor calculado para o formato de moeda (R$) com ajuste de milhares e substituição de ponto por vírgula
                const valorCalculadoFormatado = formatarMoeda(valorCalculado);

                // Alocar o valor calculado no elemento com a classe ".slip_price"
                elementoValorCalculado.innerText = valorCalculadoFormatado;

                // Remove o elemento com a classe ".skuPrice" do DOM
                elementoValorOriginal.remove();
            }
        })();
    } // Mostra Display de Produto esgotado
    else {
        $(".payment_infos_list").hide();
        $(".out_of_stock").show();
    }

    alert("carregou a function priceBlock");
}

//window.addEventListener('load', function () {
    //priceBlock();
//});
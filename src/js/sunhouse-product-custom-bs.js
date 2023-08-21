function disableproduto() {
    this.montar = function() {
        var estilocss;
        $("div.productContent div.productContent__images div.productContent__images-flags p.flag.exclusivo-loja-fisica").length && ($(".portal-notify-me-ref").hide(),
        $(".productContent__infos-comunication").hide(),
        $(".productContent__infos-freight").hide(),
        $(".productContent__infos-buyButton").after('<div id="produtoLojaFisica"><h2 id="destaque">Produto <u style="text-decoration: underline; font-style: italic">DISPON&Icirc;EL PARA VENDA EXCLUSIVAMENTE</u> atrav&eacute;s das Nossas Lojas FÃ­sicas ou via Atendimento Corporativo</h2><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional/nossas-lojas" target="new"><u>Clique aqui</u></a> e veja as informaÃ§Ãµes sobre as Nossas Lojas FÃ­Â­sicas</strong></p><br><p class="frases"> <strong><u>EndereÃ§os e Telefones de contato:</u><br></strong></p><p class="frases"><strong><u>Loja 1</u></strong>: Rua Teodoro Sampaio, 1587 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 3082-2044 e (11) 3086-0916</p><br><p class="frases"><strong><u>Loja 2</u></strong>: Rua Teodoro Sampaio, 1749 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 2503-2996 e (11) 98111-7604</p><br><p class="frases"><strong><u>Loja 3</u></strong>: Rua Mateus Grou, 413 - Pinheiros - CEP 05405-150 - SP </p><p class="frases">Telefones: (11) 2506-4546 e (11) 96594-4223</p><br><p class="frases"><strong><u>Loja Santana</u></strong>: Rua Doutor Gabriel Covelli, 58 - Parque Peruche - SP</p><p class="frases">Telefones: (11) 3816-2758 ou (11) 98935-8264</p><br><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional/vendas-corporativas" target="new"><u>Clique aqui</u></a> e veja as informaÃ§Ãµes sobre o Atendimento Corporativo</strong></p><br><p class="frases">Telefone Corporativo: (11) 2082-0432</p><p class="frases">WhatsApp Corporativo: (11) 98931-0003</p><p class="frases">E-mail Corporativo: <strong><u>Corporativo@SunHouse.com.br</u></strong></p></div>'),
        "block" == $(".buy-button").css("display") && ($("#produtoLojaFisica").hide(),
        $(".productContent__infos-comunication").show(),
        $(".productContent__infos-freight").show()))
    }
}

function adicionarJSON_LD() {
    var scriptbox = document.createElement("script"),
    productname = document.querySelector("div.productContent__infos > div.productContent__infos-name > h1").textContent,
    productSKU = document.querySelector("#___rc-p-id").value,
    productprice = document.querySelector(".slip_price").textContent.replace("R$ ", ""),
    productpriceformated = parseFloat(productprice.replace(/[R$.,]/g, "")) / 100,
    productLink = document.querySelector("#image-main").src,
    productDescription = document.querySelector(".productDescription").textContent,
    shopRatingFormated = document.querySelector(".ts-v-rating-note_value").textContent.replace("\n    ", ""),
    shopRatingQtd = document.querySelector("div.ts-v-rating-based-on > span").textContent,
    datahoje = new Date, priceData, priceValidDate = new Date((new Date).setDate(datahoje.getDate() + 15)).toLocaleDateString("en-US");
    scriptbox.type = "application/ld+json",
    scriptbox.text = JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Product",
        name: productname,
        sku: productSKU,
        image: productLink,
        description: productDescription,
        brand: {
            "@type": "Brand",
            name: "Sun House"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: shopRatingFormated,
            reviewCount: shopRatingQtd
        },
        offers: {
            "@type": "Offer",
            url: "www.sunhouse.com.br",
            price: productpriceformated,
            priceCurrency: "BRL",
            priceValidUntil: priceValidDate,
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock"
        }
    }),
    document.querySelector("head").appendChild(scriptbox)
}

$(document).ready((function () {
    alterar = new disableproduto,
        alterar.montar(),
        setTimeout(adicionarJSON_LD, 3e3)
})), $(document).ready((function () {
    const CENTIMETER = "cm",
        METER = "mt",
        KIRO = "kg"
        heightMeasureUnit = "Centímetro" === $(".measures-height").text() ? "cm" : "mt",
        widthMeasureUnit = "Centímetro" === $(".measures-width").text() ? "cm" : "mt",
        lengthMeasureUnit = "Centímetro" === $(".measures-length").text() ? "cm" : "mt",
        weightMeasureUnit = "Kilograma" === $(".measures-weight").text() ? "kg" : "g",
        alturaReal = $(".lblAlturaReal").text().replace(",00", ""),
        larguraReal = $(".lblLarguraReal").text().replace(",00", ""),
        comprimentoReal = $(".lblComprimentoReal").text().replace(",00", "");
        pesofinal = $(".lblPesoReal").text().replace(",00", "");

    $(".productContent__images-dimensions--height strong:last").text(alturaReal + heightMeasureUnit),
    $(".productContent__images-dimensions--width strong:last").text(larguraReal + widthMeasureUnit),
    $(".productContent__images-dimensions--length strong:last").text(comprimentoReal + lengthMeasureUnit),
    $(".productContent__images-dimensions--weight strong:last").text(pesofinal + weightMeasureUnit)
}));
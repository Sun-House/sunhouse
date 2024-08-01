// Monta estrutura para produtos colecao Exclusivo Loja Fisica
function disableproduto() {
    this.montar = function() {
        var estilocss;
        $("div.productContent div.productContent__images div.productContent__images-flags p.flag.exclusivo-loja-fisica").length && ($(".portal-notify-me-ref").hide(),
            $(".productContent__infos-comunication").hide(),
            $(".unavailable-button").hide(),
            $(".productContent__infos-freight").hide(),
            $(".out_of_stock").hide(),
            //$(".productContent__infos-buyButton").after('<div id="produtoLojaFisica"><h2 id="destaque">Produto<u style="text-decoration:underline"> DISPON&Iacute;EL PARA VENDA EXCLUSIVAMENTE</u> atrav&eacute;s das Nossas Lojas F&iacute;sicas ou via Atendimento Corporativo</h2><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional/nossas-lojas" target="new"><u>Clique aqui</u></a> e veja as informa&ccedil;&otilde;es sobre as Nossas Lojas F&iacute;sicas</strong></p><br><p class="frases"><strong><u>Endere&ccedil;os e Telefones de contato:</u></strong></p><br><p class="frases"><strong><u>Loja 1:</u></strong> Rua Teodoro Sampaio, 1587 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 3082-2044 e (11) 3086-0916</p><br><p class="frases"><strong><u>Loja 2:</u></strong> Rua Teodoro Sampaio, 1749 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 2503-2996 e (11) 98111-7604</p><br><p class="frases"><strong><u>Loja 3:</u></strong> Rua Mateus Grou, 413 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 2506-4546 e (11) 96594-4223</p><br><p class="frases"><strong><u>Loja Outlet:</u></strong> Rua Doutor Gabriel Covelli, 58 - Parque Peruche - SP</p><p class="frases">Telefones: (11) 3816-2758 ou (11) 98935-8264</p><br><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional/vendas-corporativas" target="new"><u>Clique aqui</u></a> e veja as informa&ccedil;&otilde;es sobre o Atendimento Corporativo</strong></p><br><p class="frases">Telefone Corporativo: (11) 2082-0432</p><p class="frases">E-mail Corporativo:<strong> Corporativo@SunHouse.com.br</strong></p></div>'),
            $(".productContent__infos-buyButton").after('<div id="produtoLojaFisica"><h2 id="destaque">Produto<u style="text-decoration:underline"> DISPON&Iacute;EL PARA VENDA EXCLUSIVAMENTE</u> atrav&eacute;s das Nossas Lojas F&iacute;sicas ou via Atendimento Corporativo</h2><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional/nossas-lojas" target="new"><u>Clique aqui</u></a> e veja as informa&ccedil;&otilde;es sobre as Nossas Lojas F&iacute;sicas</strong></p><br><p class="frases"><strong><u>Endere&ccedil;os e Telefones de contato:</u></strong></p><br><p class="frases"><strong><u>Loja 1:</u></strong> Rua Teodoro Sampaio, 1749 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 2503-2996 e (11) 98111-7604</p><br><p class="frases"><strong><u>Loja 2:</u></strong> Rua Mateus Grou, 413 - Pinheiros - CEP 05405-150 - SP</p><p class="frases">Telefones: (11) 2506-4546 e (11) 96594-4223</p><br><p class="frases"><strong><u>Loja 3 - Sun House Outlet:</u></strong> Rua Doutor Gabriel Covelli, 58 - Parque Peruche - SP</p><p class="frases">Telefones: (11) 3816-2758 e (11) 98935-8264</p><br><p class="frases"><strong><u>Loja 4 - Mega Outlet:</u></strong> Av. Casa Verde, 394 - Casa Verde - CEP 02535-010 - SP</p><p class="frases">Telefones: (11) 3816-2758 e (11) 98935-8264</p><br><p class="frases"><strong><a href="https://www.sunhouse.com.br/institucional" target="new"><u>Clique aqui</u></a> e veja as informa&ccedil;&otilde;es sobre o Atendimento Corporativo</strong></p><br><p class="frases">Telefone Corporativo: (11) 2082-0432</p><p class="frases">E-mail Corporativo:<strong> Corporativo@SunHouse.com.br</strong></p></div>'),
            ("block" == $(".buy-button").css("display") || "flex" == $(".buy-button").css("display")) && ($("#produtoLojaFisica").hide(),
                $(".productContent__infos-comunication").show(),
                $(".productContent__infos-freight").show()
            )
        );
        // Adiciona a logica para esconder o elemento com id addCart_main se as condicoes atenderem
        if ($(".unavailable-button").css("display") == "block") {
            $("#addCart_main").hide();
        }
        
        if ($("#produtoLojaFisica").length) {
            $("#addCart_main").hide();
        }
    }
}

// Cria breadcrumb para pesquisa no Google SEO
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

// Executa funcao de lojafisica dentro da condicao e funcao pesquisa Google SEO
$(document).ready((function () {
    alterar = new disableproduto,
        alterar.montar(),
        setTimeout(adicionarJSON_LD, 3e3)
})),

// Bloco medidas pdp INICIO
// Cria medidas do table da descricao detalhada
$(document).ready(function () {
    // Valor elementos origem
    const altToMove = document.querySelector(".lblAlturaReal").textContent + " " + document.querySelector(".measures-height").textContent;
    const largToMove = document.querySelector(".lblLarguraReal").textContent + " " + document.querySelector(".measures-width").textContent;
    const profToMove = document.querySelector(".lblComprimentoReal").textContent + " " + document.querySelector(".measures-length").textContent;
    const pesoToMove = document.querySelector(".lblPesoReal").textContent + " " + document.querySelector(".measures-weight").textContent;

    // Elementos destino
    const destAlt = document.getElementById("alturaReal");
    const destLarg = document.getElementById("larguraReal");
    const destProf = document.getElementById("profundidadeReal");
    const destPeso = document.getElementById("pesoReal");

    // Copiando os valores
    destAlt.textContent = altToMove + "s";
    destLarg.textContent = largToMove + "s";
    destProf.textContent = profToMove + "s";
    destPeso.textContent = pesoToMove + "s";
});

// Cria medidas para parte abaixo das fotos
$(document).ready((function () {
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
// Bloco medidas pdp FIM

//
// Adiciona classe para correcao visual mobile de quando o produto estiver esgotado
$(document).ready(function() {
    if ($(".productContent__infos-buyButton .unavailable-button").css("display") == "block") {
        $(".productContent__infos-buyButton").addClass("has-unavailable-button");
    }
});
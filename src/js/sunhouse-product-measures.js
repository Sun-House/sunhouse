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

// Cria medidas do block abaixo da foto do produto
function fnInserirMedidasBlocos() {
    var AlturValue = skuJson.skus[0].measures.height,
        LargurValue = skuJson.skus[0].measures.width,
        ProfunValue = skuJson.skus[0].measures.length,
        PesValue = skuJson.skus[0].measures.weight;

    const altBloco = document.getElementById("alt-block");
    const largBloco = document.getElementById("larg-block");
    const profBloco = document.getElementById("prof-block");
    const pesoBloco = document.getElementById("peso-block");

    altBloco.innerHTML = AlturValue;
    largBloco.innerHTML = LargurValue;
    profBloco.innerHTML = ProfunValue;
    pesoBloco.innerHTML = PesValue;
}

// Faz os devidos ajustes nos displays de siglas e valores corretos no Block inicial de medidas PDP
$(document).ready((function () {
    const CENTIMETER = "cm",
        METER = "mt",
        heightMeasureUnit = "Cent&iacute;metro" === $(".measures-height").text() ? "cm" : "mt",
        widthMeasureUnit = "Cent&iacute;metro" === $(".measures-width").text() ? "cm" : "mt",
        lengthMeasureUnit = "Cent&iacute;metro" === $(".measures-length").text() ? "cm" : "mt",
        alturaReal = $(".lblAlturaReal").text().replace(",00", ""),
        larguraReal = $(".lblLarguraReal").text().replace(",00", ""),
        comprimentoReal = $(".lblComprimentoReal").text().replace(",00", "");
    $(".productContent__images-dimensions--height strong:last").text(alturaReal + heightMeasureUnit),
        $(".productContent__images-dimensions--width strong:last").text(larguraReal + widthMeasureUnit),
        $(".productContent__images-dimensions--length strong:last").text(comprimentoReal + lengthMeasureUnit)
}));

// Executa funcoes blocadas acima
$(document).ready(function () {
    fnInserirMedidasBlocos()
});
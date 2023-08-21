// Cria medidas do table da descricao detalhada
function fnInserirMedidasTable() {
    var AltValue = skuJson.skus[0].measures.height,
        LargValue = skuJson.skus[0].measures.width,
        ProfValue = skuJson.skus[0].measures.length,
        PesoValue = skuJson.skus[0].measures.weight;
    AltValue <= 99 ? (AltValue = (AltValue = AltValue.toFixed(2)).replace(".", ","),
            document.getElementById("alturaReal").innerHTML = " " + AltValue + " cent&iacute;metros") : AltValue >= 100 && AltValue <= 199 ? (AltValue = (AltValue = (AltValue /= 100).toString()).replace(".", ","),
            document.getElementById("alturaReal").innerHTML = " " + AltValue + "0 metro") : (AltValue = (AltValue = (AltValue /= 100).toString()).replace(".", ","),
            document.getElementById("alturaReal").innerHTML = " " + AltValue + "0 metros"),
        LargValue <= 99 ? (LargValue = (LargValue = LargValue.toFixed(2)).replace(".", ","),
            document.getElementById("larguraReal").innerHTML = " " + LargValue + " centíetros") : LargValue >= 100 && LargValue <= 199 ? (LargValue = (LargValue = (LargValue /= 100).toString()).replace(".", ","),
            document.getElementById("larguraReal").innerHTML = " " + LargValue + "0 metro") : (LargValue = (LargValue = (LargValue /= 100).toString()).replace(".", ","),
            document.getElementById("larguraReal").innerHTML = " " + LargValue + "0 metros"),
        ProfValue <= 99 ? (ProfValue = (ProfValue = ProfValue.toFixed(2)).replace(".", ","),
            document.getElementById("profundidadeReal").innerHTML = " " + ProfValue + " cent&iacute;metros") : ProfValue >= 100 && ProfValue <= 199 ? (ProfValue = (ProfValue = (ProfValue /= 100).toString()).replace(".", ","),
            document.getElementById("profundidadeReal").innerHTML = " " + ProfValue + "0 metro") : (ProfValue = (ProfValue = (ProfValue /= 100).toString()).replace(".", ","),
            document.getElementById("profundidadeReal").innerHTML = " " + ProfValue + "0 metros"),
        PesoValue <= 999 ? document.getElementById("pesoReal").innerHTML = " " + PesoValue + " gramas" : PesoValue >= 1e3 && PesoValue <= 1999 ? (PesoValue = (PesoValue = (PesoValue /= 1e3).toString()).replace(".", ","),
            document.getElementById("pesoReal").innerHTML = " " + PesoValue + " kilograma") : (PesoValue = (PesoValue = (PesoValue /= 1e3).toString()).replace(".", ","),
            document.getElementById("pesoReal").innerHTML = " " + PesoValue + " kilogramas")
}

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
    fnInserirMedidasTable(),
    fnInserirMedidasBlocos()
});
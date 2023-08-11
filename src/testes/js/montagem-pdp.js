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

    const montagemBlock = document.getElementById("montagem-pdp");
    const montagemInfo = document.getElementById("productMontagem-info");

    // Apenas debug: console.log("Valor do cepNumerico: " + cepNumerico);

    // Verifica se o CEP está nas faixas especificadas
    if ((cepNumerico >= 1000000 && cepNumerico <= 5999999) ||
        (cepNumerico >= 8000000 && cepNumerico <= 8499999)) {
        montagemBlock.classList.add("montagem_show");
        montagemInfo.classList.add("montagem_show");
        // Apenas debug: console.log("Retorno: Verdadeiro (CEP dentro da faixa)");
    } else {
        // Apenas debug: console.log("Retorno: Falso (CEP fora da faixa)");
        montagemBlock.classList.remove("montagem_show");
        montagemInfo.classList.remove("montagem_show");
    }
}
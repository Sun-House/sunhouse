window.addEventListener("load", function () {
    setTimeout(function () {
        document.getElementById("btnFreteSimulacao").addEventListener("click", function () {
            checarCep();
        });
    }, 3000); // 3 segundos de espera
});

function checarCep() {
    var cep = document.getElementById("txtCep").value;
    var cepNumerico = cep.replace(/\D/g, ''); // Remove não números do CEP
    cepNumerico = parseInt(cepNumerico); // Converte para número inteiro

    // Apenas debug: console.log("Valor do cepNumerico: " + cepNumerico);

    // Verifica se o CEP está nas faixas especificadas
    if ((cepNumerico >= 1000000 && cepNumerico <= 5999999) ||
        (cepNumerico >= 8000000 && cepNumerico <= 8499999)) {
        document.getElementById("montagem-pdp").classList.add("montagem_show");
        // Apenas debug: console.log("Retorno: Verdadeiro (CEP dentro da faixa)");
    } else {
        // Apenas debug: console.log("Retorno: Falso (CEP fora da faixa)");
        document.getElementById("montagem-pdp").classList.remove("montagem_show");
    }
}
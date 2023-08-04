// Função que será executada quando o elemento abaixo for adicionado ao DOM
function iniciarChecarCep() {
    var triggerCep = document.getElementById("btnFreteSimulacao");
    if (triggerCep) {
        triggerCep.addEventListener("input", checarCep); // Adiciona o evento de input ao elemento
        checarCep(); // Executa a função inicialmente para realizar a verificação
    } else {
        // Se o elemento ainda não foi adicionado, aguarda mais um tempo e verifica novamente
        setTimeout(iniciarChecarCep, 100); // Aguarda 100 milissegundos antes de verificar novamente
    }
}

// Função que realiza a verificação do CEP
function checarCep() {
    var cep = document.getElementById("txtCep").value;
    var cepNumerico = cep.replace(/\D/g, ''); // Remove não números do CEP
    cepNumerico = parseInt(cepNumerico); // Converte para número inteiro

    // Verifica se o CEP está nas faixas especificadas
    if ((cepNumerico >= 1000000 && cepNumerico <= 5999999) ||
        (cepNumerico >= 8000000 && cepNumerico <= 8499999)) {
        document.getElementById("montagem-pdp").classList.add("montagem_show");
    } else {
        document.getElementById("montagem-pdp").classList.remove("montagem_show");
    }
}

// Inicia a verificação do elemento após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
    iniciarChecarCep();
});
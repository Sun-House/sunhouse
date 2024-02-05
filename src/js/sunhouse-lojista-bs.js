//Obtem final da URL com Marca alvo e adiciona aos elementos alvo da pagina
function obterConteudoFinalDaURL() {
    // URL da sua string
    var url = window.location.href;

    // Remover os parâmetros de consulta
    var urlSemQuery = url.split('?')[0];

    // Dividir a URL pela barra "/"
    var partesDaURL = urlSemQuery.split("/");

    // Obter o último elemento do array resultante
    var conteudoFinal = partesDaURL.pop();

    // Armazenar a variável para uso posterior
    window.conteudoFinalDaURL = conteudoFinal;

    // Ajusta o valor de value em todos os elementos option do select abaixo
    var selectOptions = document.querySelectorAll('.option-qf');
    if (selectOptions.length > 0) {
        selectOptions.forEach(function (slOption) {
            slOption.value += conteudoFinal;
        });
    }

    // Ajusta o valor do Href dos elementos abaixo marcados
    var linkProntaEntrega = document.getElementById('button_qf_pe');
    if (linkProntaEntrega) {
        linkProntaEntrega.href += conteudoFinal + "/218?map=b,productClusterIds";
    };

    var linkLancamentos = document.getElementById('button_qf_lanc');
    if (linkLancamentos) {
        linkLancamentos.href += conteudoFinal + "/212?map=b,productClusterIds";
    };
}

// Chamar a função quando a página carregar
window.onload = obterConteudoFinalDaURL;

// Redireciona para cada Categoria + Marca alvo
function redirecionaCategBrand() {
    var selectElement = document.getElementById("select_qf");
    var selectedValue = selectElement.value;

    // Redirecionar para o link selecionado, se não for a opção padrão "Selecione uma opção"
    if (selectedValue !== "selecione") {
        window.location.href = selectedValue;
    }
}
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

    // Adicionar o valor ao final do atributo 'value' de todos os elementos <option> com id "opt_qf"
    //var selectOptions = document.querySelectorAll('.option_qf');
    //selectOptions.forEach(function (slOption) {
        //slOption.value += conteudoFinal;
    //});

    //var linkHrefs = document.querySelectorAll('.button-qf');
    //linkHrefs.forEach(function (linkHr) {
        //linkHr.href += conteudoFinal;
    //});

    var selectOptions = document.querySelectorAll('.option-qf');
    if (selectOptions.length > 0) {
        selectOptions.forEach(function (slOption) {
            slOption.value += conteudoFinal;
        });
    }

    var linkHrefs = document.querySelectorAll('.button-qf');
    if (linkHrefs.length > 0) {
        linkHrefs.forEach(function (linkHr) {
            linkHr.href += conteudoFinal;
        });
    }
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
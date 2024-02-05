//Obtem final da URL com Marca alvo
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

    // Imprimir no console para verificar
    console.log("Conteúdo Final da URL:", conteudoFinal);
}

// Chamar a função quando a página carregar
window.onload = obterConteudoFinalDaURL;

//

// Redireciona para cada Categoria + Marca alvo
function redirecionaCategBrand() {
    var selectElement = document.getElementById("select_qf");
    var selectedValue = selectElement.value;

    // Redirecionar para o link selecionado, se não for a opção padrão "Selecione uma opção"
    if (selectedValue !== "selecione") {
        window.location.href = selectedValue;
    }
}
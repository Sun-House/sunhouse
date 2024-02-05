function redirecionaCategBrand() {
    var selectElement = document.getElementById("select_qf");
    var selectedValue = selectElement.value;

    // Redirecionar para o link selecionado, se não for a opção padrão "Selecione uma opção"
    if (selectedValue !== "selecione") {
        window.location.href = selectedValue;
    }
}
setTimeout(function () {
    // Encontre o item no array que contém as informações desejadas (pode variar dependendo do contexto)
    var itemComDados = dataLayer.find(function (item) {
        return item.productBrandName;
    });

    // Verifica se o item foi encontrado e se productBrandName está definido
    if (itemComDados && itemComDados.productBrandName) {
        // Obtém o valor do campo alvo do DataLayer
        var brandName = itemComDados.productBrandName;

        // Remove espaços e substitui por hifens
        var formattedBrandName = brandName.replace(/\s+/g, '-');

        // Obtém o elemento HTML alvo pelo ID
        var linkElement = document.getElementById("product_brand_link");

        // Atualiza o href do elemento com o novo valor
        linkElement.href = "https://www.sunhouse.com.br/lojista/" + formattedBrandName;

        // Opcional: Adiciona o texto ao elemento para visualização
        linkElement.textContent = brandName;
    } else {
        console.error("Os dados necessários não foram encontrados no DataLayer.");
    }
}, 2000);
// Modelo inicial - funcional
//setTimeout(function () {
    // Encontre o item no array que contém as informações desejadas (pode variar dependendo do contexto)
    //var itemComDados = dataLayer.find(function (item) {
        //return item.productBrandName;
    //});

    // Verifica se o item foi encontrado e se productBrandName está definido
    //if (itemComDados && itemComDados.productBrandName) {
        // Obtém o valor do campo alvo do DataLayer
        //var brandName = itemComDados.productBrandName;

        // Remove espaços e substitui por hifens
        //var formattedBrandName = brandName.replace(/\s+/g, '-');

        // Obtém o elemento HTML alvo pelo ID
        //var linkElement = document.getElementById("product_brand_link");

        // Atualiza o href do elemento com o novo valor
        //linkElement.href = "https://www.sunhouse.com.br/lojista/" + formattedBrandName;

        // Opcional: Adiciona o texto ao elemento para visualização
        //linkElement.textContent = brandName;
    //} else {
        //console.error("Os dados necessários não foram encontrados no DataLayer.");
    //}
//}, 2000);


// Novo modelo 30.01.24 - em testes
setTimeout(function () {
    var itemComDados = dataLayer.find(function (item) {
        return item.productBrandName;
    });

    if (itemComDados && itemComDados.productBrandName && !itemComDados.productBrandName == "Sun House") {
        var brandName = itemComDados.productBrandName;

        var formattedBrandName = brandName.replace(/\s+/g, '-');

        var linkElement = document.getElementById("product_brand_link");

        linkElement.href = "https://www.sunhouse.com.br/lojista/" + formattedBrandName;

        linkElement.textContent = brandName;
    } else {
        var linkElementDf = document.getElementById("brand_sunhouse_notlinked");

        linkElementDf.style.display = 'block';
    }
}, 2000);
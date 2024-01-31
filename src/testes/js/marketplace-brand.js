// Novo modelo 30.01.24 - homologado
setTimeout(function () {
    var itemComDados = dataLayer.find(function (item) {
        return item.productBrandName;
    });

    const brandLinked = document.getElementById("product_brand_link");

    if (itemComDados && itemComDados.productBrandName && !(itemComDados.productBrandName == "Sun House")) {
        var brandName = itemComDados.productBrandName;
        var formattedBrandName = brandName.replace(/\s+/g, '-');

        brandLinked.href = "https://www.sunhouse.com.br/lojista/" + formattedBrandName;
        brandLinked.textContent = brandName;
    } else {
        var brandNotLinked = document.getElementById("brand_sunhouse_notlinked");

        brandNotLinked.style.display = 'block';
        brandLinked.style.display= 'none';
    }
}, 2000);
// 25.03.2024 - Funcional
// Função para adicionar o ouvinte de evento de clique a um elemento
function adicionarOuvinteClique(seletor, funcaoCallback) {
    var elementos = document.querySelectorAll(seletor);
    if (elementos.length > 0) {
        elementos.forEach(function (elemento) {
            elemento.addEventListener('click', funcaoCallback);
        });
    } else {
        console.error('Nenhum elemento encontrado com o seletor:', seletor);
    }
}

// Função de callback para o clique no botão
function cliqueNoBotao(a) {
    a.preventDefault();
    //var b = $(this).parents(".shelfProduct").attr("data-id");
    var skuCode = $(this).closest("li.shelfProduct").attr("data-id");

    $.ajax({
        url: "/api/catalog_system/pub/products/search/?fq=productId:" + skuCode,
        method: "GET",
        timeout: 0,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).done((function (a) {
        var skuCode = {
            id: a[0].items[0].itemId,
            quantity: 1,
            seller: "1"
        };

        vtexjs.checkout.addToCart([skuCode], null, 1)

        window.location.href = '/checkout';
    }))
}

// Chamando a função para adicionar o ouvinte de evento de clique ao botão
adicionarOuvinteClique('#buy_now', cliqueNoBotao);
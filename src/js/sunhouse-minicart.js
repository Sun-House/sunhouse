document.addEventListener('DOMContentLoaded', function () {
    function alteraDisplaysMiniCart() {
        // Seleciona o tbody da tabela
        var tbody = document.querySelector('div.portal-minicart-ref div.v2-vtexsc-cart div.vtexsc-center div.vtexsc-wrap table.vtexsc-productList tbody');
        var promoBar = document.getElementById('mini-cart__promo-highlight');
        var emptyCartSad = document.getElementById('mini-cart__empty-cart');

        // Verifica se existe pelo menos um elemento tr dentro do tbody
        if (tbody && tbody.querySelectorAll('tr').length > 0) {
            // Se houver pelo menos um tr, faça algo aqui
            //console.log('Pelo menos 1 elemento <tr> encontrado.');

            promoBar.style.display = 'block';
            emptyCartSad.style.display = 'none';
        } else {
            // Se não houver nenhum tr, faça algo aqui
            //console.log('Nenhum elemento <tr> encontrado.');
            promoBar.style.display = 'none';
            emptyCartSad.style.display = 'block';
        }
    }

    // Bloco do MutationObserver
    var observer = new MutationObserver(function () {
        // Desconecta o observador para evitar loops
        observer.disconnect();
        try {
            incrementQtdPrd();
        } catch (error) {
            console.error('Erro ao incrementar a quantidade de produtos:', error);
        } finally {
            // Reconecta o observador depois das modificações
            observe();
        }
    });

    // Selecione o elemento pai que contém a estrutura que sofre alteração
    var portalMiniCartRef = document.querySelector('.portal-minicart-ref');

    // Função para configurar o observador
    function observe() {
        if (portalMiniCartRef) {
            observer.observe(portalMiniCartRef, {
                childList: true,
                subtree: true
            });
        }
    }
    
    observe();
    // Bloco do MutationObserver
});

function incrementQtdPrd() {
    vtexjs.checkout.getOrderForm().done(function (orderForm) {
        // Verifica se o elemento ".header__cart-items" existe
        var headerCartItems = document.querySelector('.header__cart-items');
        if (headerCartItems) {
            headerCartItems.textContent = orderForm.items.length;
        } else {
            console.error('Elemento ".header__cart-items" não encontrado.');
        }
    }).fail(function (error) {
        console.error('Erro ao obter o orderForm:', error);
    });
}
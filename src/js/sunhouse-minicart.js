// Em processo de DEV

document.addEventListener('DOMContentLoaded', function () {

    function alteraDisplaysMiniCart () {
        // Seleciona o tbody da tabela
        var tbody = document.querySelector('div.portal-minicart-ref div.v2-vtexsc-cart div.vtexsc-center div.vtexsc-wrap table.vtexsc-productList tbody');
        var promoBar = document.getElementById('mini-cart__promo-highlight');
        var emptyCartSad = document.getElementById('mini-cart__empty-cart');

        // Verifica se existe pelo menos um elemento tr dentro do tbody
        if (tbody && tbody.querySelectorAll('tr').length > 0) {
            // Se houver pelo menos um tr, faça algo aqui
            console.log('Pelo menos 1 elemento <tr> encontrado.');
            
            promoBar.style.display = 'block';
            emptyCartSad.style.display = 'none';
        } else {
            // Se não houver nenhum tr, faça algo aqui
            console.log('Nenhum elemento <tr> encontrado.');
            
            promoBar.style.display = 'none';
            emptyCartSad.style.display = 'block';
        }
    }

    // Bloco do MutationObserver
    // Ouvinte de evento para detectar alterações na estrutura
    var observer = new MutationObserver(function () {
        console.log("Alteração detectada na estrutura. Funcoes executadas");
        // Se houver alterações, execute algo abaixo
        alteraDisplaysMiniCart();
    });

    // Selecione o elemento pai que contém a estrutura que sofre alteração
    var portalMiniCartRef = document.querySelector('.portal-minicart-ref');

    // Se o elemento pai existir, observe alterações em seu conteúdo
    if (portalMiniCartRef) {
        observer.observe(portalMiniCartRef, {
            childList: true,
            subtree: true
        });
    } else {
        console.log("Elemento pai não encontrado.");
    }
    // Bloco do MutationObserver
    
});
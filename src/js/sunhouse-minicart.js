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

    function incrementQtdPrd() {
        // Seleciona o tbody da tabela
        var tbody = document.querySelector('#mini-cart__sidebar .vtexsc-productList tbody');

        // Conta o número de elementos <tr> dentro do tbody
        var rowCount = tbody.getElementsByTagName('tr').length;

        // Converte o número de linhas para uma string
        var rowCountStr = rowCount.toString();

        // Seleciona os elementos com a classe "header__cart-items"
        var cartItems = document.querySelectorAll('.header__cart-items');

        // Itera sobre cada elemento da lista e atribui o valor rowCountStr a eles
        cartItems.forEach(function (item) {
            item.textContent = rowCountStr;
        });
    }

    // Bloco do MutationObserver
    // Ouvinte de evento para detectar alterações na estrutura
    var observer = new MutationObserver(function () {
        //console.log("Alteração detectada na estrutura. Funcoes executadas");
        // Se houver alterações, execute algo abaixo
        alteraDisplaysMiniCart();
        incrementQtdPrd();
    });
    
    // Selecione o elemento pai que contém a estrutura que sofre alteração
    var portalMiniCartRef = document.querySelector('.portal-minicart-ref');
    
    // Se o elemento pai existir, observe alterações em seu conteúdo
    if (portalMiniCartRef) {
        observer.observe(portalMiniCartRef, {
            childList: true,
            subtree: true
        });
    }

    // Bloco btn Add to Cart
    function showMinicart() {
        var miniCartBSOffCanvas = document.getElementById('mini-cart__sidebar');
    
        // Verifica se o carrinho já está visível
        if (miniCartBSOffCanvas.classList.contains('show')) {
            return; // Se estiver visível, retorna sem fazer mais nada
        }
    
        var bsOffcanvas = new bootstrap.Offcanvas(miniCartBSOffCanvas)
        bsOffcanvas.show();
    }
    
    document.getElementById("minicart__promo-cta-btn").onclick = function () {
        vtexjs.checkout.getOrderForm().then(function (orderForm) {
            var code = "ARRAIAL10"
            return vtexjs.checkout.addDiscountCoupon(code)
        }).then(function (orderForm) {
            console.log(orderForm)
            console.log(orderForm.paymentData)
            console.log(orderForm.totalizers)

            const Toast = Swal.mixin({
                toast: true,
                //position: "top-end",
                position: "top",
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: function (toast) {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Cupom adicionado ao carrinho!"
            })
            
            showMinicart()
        });
    };
});
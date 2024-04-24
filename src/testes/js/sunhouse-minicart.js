// Em processo de DEV

// Funciona mas quando o cart atualiza dinamicamente precisa rodar
// de novo esse script de forma a atualizar o carrinho tambem
document.addEventListener('DOMContentLoaded', function () {
    // Selecione o elemento que deseja mover
    var nativeMiniCartv2 = document.querySelector('.v2-vtexsc-cart .vtexsc-center');

    // Selecione o elemento de destino
    var sideBarMiniCart = document.getElementById('mini-cart__block');

    // Verifique se ambos os elementos existem
    if (nativeMiniCartv2 && sideBarMiniCart) {
        // Mova o elemento para dentro do elemento de destino
        sideBarMiniCart.appendChild(nativeMiniCartv2);
    } else {
        console.log('Um dos elementos não foi encontrado.');
    }
});
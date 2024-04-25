// Em processo de DEV

// V1:
// Funciona mas quando o cart atualiza dinamicamente precisa rodar
// de novo esse script de forma a atualizar o carrinho tambem
//document.addEventListener('DOMContentLoaded', function () {
    // Selecione o elemento que deseja mover
    //var nativeMiniCartv2 = document.querySelector('.v2-vtexsc-cart .vtexsc-center');

    // Selecione o elemento de destino
    //var sideBarMiniCart = document.getElementById('mini-cart__block');

    // Verifique se ambos os elementos existem
    //if (nativeMiniCartv2 && sideBarMiniCart) {
        // Mova o elemento para dentro do elemento de destino
        //sideBarMiniCart.appendChild(nativeMiniCartv2);
    //} else {
        //console.log('Um dos elementos não foi encontrado.');
    //}
//});


// V2:
document.addEventListener('DOMContentLoaded', function () {
    // Selecione o elemento que deseja copiar
    var nativeMiniCartv2 = document.querySelector('.v2-vtexsc-cart .vtexsc-center');

    // Selecione o elemento de destino
    var sideBarMiniCart = document.getElementById('mini-cart__block');

    // Função para copiar o elemento
    function copyElement() {
        // Verifique se o elemento de origem e o elemento de destino existem
        if (nativeMiniCartv2 && sideBarMiniCart) {
            // Crie uma cópia do elemento
            var clonedElement = nativeMiniCartv2.cloneNode(true);
            // Remova qualquer cópia anterior do elemento de destino
            var existingElement = sideBarMiniCart.querySelector('.vtexsc-center');
            if (existingElement) {
                existingElement.remove();
            }
            // Adicione a cópia do elemento ao elemento de destino
            sideBarMiniCart.appendChild(clonedElement);
        } else {
            console.log('Um dos elementos não foi encontrado.');
        }
    }

    // Copie o elemento quando a página for carregada inicialmente
    copyElement();

    // Ouvinte de evento para detectar alterações no elemento .vtexsc-center
    var observer = new MutationObserver(function (mutationsList) {
        // Verifique se houve alterações no .vtexsc-center
        for (var mutation of mutationsList) {
            if (mutation.target.classList.contains('vtexsc-center')) {
                // Se houve alterações, copie o elemento novamente
                copyElement();
                break;
            }
        }
    });

    // Opções de configuração para o observador de mutação
    var observerConfig = {
        attributes: true, // Observar mudanças nos atributos do elemento
        childList: true, // Observar mudanças na lista de filhos do elemento
        subtree: true // Observar todos os descendentes do elemento
    };

    // Comece a observar o elemento .vtexsc-center
    observer.observe(document.body, observerConfig);
});
// Em processo de DEV

// V2:
document.addEventListener('DOMContentLoaded', function () {
    // Função para copiar o elemento
    function copyElement() {
        // Selecione o elemento que deseja copiar
        var nativeMiniCartv2 = document.querySelector('.v2-vtexsc-cart .vtexsc-center');
        console.log("Elemento a ser copiado:", nativeMiniCartv2);

        // Selecione o elemento de destino
        var sideBarMiniCart = document.getElementById('mini-cart__block');
        console.log("Elemento de destino:", sideBarMiniCart);

        // Verifique se o elemento de origem e o elemento de destino existem
        if (nativeMiniCartv2 && sideBarMiniCart) {
            // Crie uma cópia do elemento
            var clonedElement = nativeMiniCartv2.cloneNode(true);
            // Remova qualquer cópia anterior do elemento de destino
            var existingElement = sideBarMiniCart.querySelector('.vtexsc-center');
            if (existingElement) {
                existingElement.remove();
                console.log("Elemento anterior removido.");
            }
            // Adicione a cópia do elemento ao elemento de destino
            sideBarMiniCart.appendChild(clonedElement);
            console.log("Elemento copiado para o destino.");
        } else {
            console.log('Um dos elementos não foi encontrado.');
        }
    }

    // Copie o elemento quando a página for carregada inicialmente
    copyElement();

    // Ouvinte de evento para detectar alterações na estrutura
    var observer = new MutationObserver(function () {
        console.log("Alteração detectada na estrutura.");
        // Se houver alterações, copie o elemento novamente
        copyElement();
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
});
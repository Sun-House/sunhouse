// Mover essa function para o arquivo sunhouse-product.js final

// Função para mover os elementos
function moveElementos() {
    const prodDesc = document.getElementById('product-description');
    const prodFicha = document.getElementById('product-ficha');
    const prodRate = document.getElementById('product-rate');

    if (window.matchMedia('(max-width: 1199px)').matches) {
        // Verifica se a largura da tela é no máximo 1199px
        // Move os elementos para um novo local no DOM
        const prodDescMob = document.getElementById('mobile_product-description');
        const prodFichaMob = document.getElementById('mobile_product-ficha');
        const prodRateMob = document.getElementById('mobile_product-rate');

        prodDescMob.appendChild(prodDesc);
        prodFichaMob.appendChild(prodFicha);
        prodRateMob.appendChild(prodRate);
    } //else {
        // Se a largura da tela for maior que 1199px, restaura a posição original dos elementos
        //const prodDescDesk = document.getElementById('');
        //const prodFichaDesk = document.getElementById('');
        //const prodRateDesk = document.getElementById('');

        //prodDescDesk.appendChild(prodDesc);
        //prodFichaDesk.appendChild(prodFicha);
        //prodRateDesk.appendChild(prodRate);
    //}
}

// Chama a função quando a janela é carregada e quando sua largura é alterada
window.addEventListener('load', moveElementos);
window.addEventListener('resize', moveElementos);
function priceBlock(){
    const shouldExecuteBlocks = document.querySelector(".plugin-preco");

    if (shouldExecuteBlocks){
        // Movimentacao de elementos para seus devidos locais de display
        $(document).ready(function () {
            // Obtém referência para o elemento a ser movido
            const elementToMove = document.getElementById("product-name-rmv");
            const fullPriceMove = document.querySelector(".skuListPrice");
            const creditPriceMove = document.querySelector(".skuBestPrice");

            // Obtém referência para o destino do elemento
            const destination = document.getElementById("product-name");
            const destinationFprice = document.querySelector(".full_price");
            const destinationCprice = document.querySelector(".credit_price");

            // Move o elemento para o destino
            destination.appendChild(elementToMove);
            destinationFprice.appendChild(fullPriceMove);
            destinationCprice.appendChild(creditPriceMove);
        });

        // Copia valor em 10x para os devidos displays
        $(document).ready(function () {
            const movePriceFull = document.querySelector(".skuPrice");

            const conteudoPriceFull = movePriceFull.innerHTML;

            var priceFullDestination = document.querySelectorAll(".final_price_3");

            priceFullDestination.forEach(function (priceCub) {
                priceCub.innerHTML = conteudoPriceFull;
            });
        });

        // Move elementos com o valor de cada parcela de acordo com a quantidade da mesma
        $(document).ready(function () {
            function moveElements() {
                const liElements = document.querySelectorAll(".other-payment-method-American");

                liElements.forEach(li => {
                    const className = li.classList.item(1);
                    if (className.includes("Express-")) {
                        const numero = Number(className.split("-")[1]);
                        const elementoDestino = document.getElementById(`formated-price-${numero}`);
                        const strongElement = li.querySelector("strong");

                        if (elementoDestino && strongElement) {
                            let percentSubtraction = 0;

                            if (numero >= 1 && numero <= 3) {
                                percentSubtraction = 3.96;
                            } else if (numero >= 4 && numero <= 6) {
                                percentSubtraction = 2;
                            }

                            const originalValue = parseFloat(strongElement.textContent.replace(/[^\d,]/g,
                                "").replace(",", "."));
                            const newValue = originalValue * (1 - percentSubtraction / 100);

                            const formattedValue = newValue.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            });

                            strongElement.textContent = formattedValue;
                            elementoDestino.appendChild(strongElement);
                        }
                    }
                });
            }
            moveElements();

            setTimeout(function () {
                // Obtém o valor do elemento com ID "formated-price-10"
                const formatedPrice = document.getElementById("formated-price-10").textContent;
                const priceInstallment = document.getElementById("installment__formated-price-10");
                
                // Define o valor no elemento com ID "installment__formated-price-10"
                priceInstallment.textContent = formatedPrice;
            }, 1000); // 1 segundos de espera
        });

        // Calculo preco final com desconto progressivo e alocacao para os elementos de display
        $(document).ready(function () {
            function converterValor(valorTexto) {
                const valorNumerico = parseFloat(valorTexto.replace("R$", "").replace(".", "").replace(",", "."));
                return valorNumerico;
            }

            function formatarValor(valor) {
                return valor.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
            }

            function calcularDescontos(valorAlvo) {
                const desconto1 = valorAlvo * 0.0396;
                const valorComDesconto1 = valorAlvo - desconto1;

                const desconto2 = valorAlvo * 0.02;
                const valorComDesconto2 = valorAlvo - desconto2;

                return [valorAlvo, valorComDesconto1, valorComDesconto2];
            }

            // Obtendo o elemento que contém o valor alvo
            const valorElement = document.querySelector(".skuBestPrice");
            const valorTexto = valorElement.textContent.trim();

            // Convertendo o valor de texto para numérico
            const valorAlvo = converterValor(valorTexto);

            // Calculando os descontos e armazenando os resultados na lista
            const resultados = calcularDescontos(valorAlvo);

            // Selecionando todos os elementos com as classes "final_price_1" e "final_price_2"
            const finalPriceElements1 = document.querySelectorAll(".final_price_1");
            const finalPriceElements2 = document.querySelectorAll(".final_price_2");

            // Atribuindo os valores calculados a todos os elementos
            finalPriceElements1.forEach((element) => {
                element.textContent = `R$ ${formatarValor(resultados[1])}`;
            });

            finalPriceElements2.forEach((element) => {
                element.textContent = `R$ ${formatarValor(resultados[2])}`;
            });
        });

        // Calcula valor a vista e move para o Price Block New
        // Função para calcular a subtração de 7% do valor em moeda
        function calcularSubtracao(valor) {
            const taxaSubtracao = 0.07;
            return valor - (valor * taxaSubtracao);
        }

        // Função para formatar o valor para o formato de moeda (R$)
        function formatarMoeda(valor) {
            return valor.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
        }

        // Obter o valor do elemento HTML, realizar o cálculo e alocar o valor no elemento com a classe ".slip_price"
        (function () {
            const elementoValorOriginal = document.querySelector(".skuPrice");
            const elementoValorCalculado = document.querySelector(".slip_price");

            // Obtém o valor original do elemento e remove o símbolo 'R$' e outros caracteres não numéricos
            const valorOriginalTexto = elementoValorOriginal.innerText.trim().replace("R$", "").replace(".", "")
                .replace(",", ".");
            const valorOriginalNumerico = parseFloat(valorOriginalTexto);

            // Verifica se o valor é válido
            if (!isNaN(valorOriginalNumerico)) {
                // Calcula o novo valor após a subtração de 7%
                const valorCalculado = calcularSubtracao(valorOriginalNumerico);

                // Formata o valor calculado para o formato de moeda (R$) com ajuste de milhares e substituição de ponto por vírgula
                const valorCalculadoFormatado = formatarMoeda(valorCalculado);

                // Alocar o valor calculado no elemento com a classe ".slip_price"
                elementoValorCalculado.innerText = valorCalculadoFormatado;

                // Remove o elemento com a classe ".skuPrice" do DOM
                elementoValorOriginal.remove();
            }
        })();
    } else {
        // Mostra Display de Produto esgotado
        $(".payment_infos_list").hide();
        $(".out_of_stock").show();
    }
}

$(document).ready(function () {
    priceBlock();
});

//window.addEventListener("load", function () {
    //priceBlock();
//})
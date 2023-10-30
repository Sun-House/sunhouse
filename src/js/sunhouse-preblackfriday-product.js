function fnPreBlackDiscount(){
    var VlrFull = document.querySelector('strong.slip_price').textContent;
    var numericValue = parseFloat(VlrFull.replace("R$", "").replace(",", "").replace(".", "")) / 100;
    if(numericValue >= 10735){
        (numericValue=(numericValue-numericValue/100*7).toFixed(2).replace(".",","),
        numericValue.length > 6 && (numericValue=numericValue.charAt(0)+numericValue.charAt(1)+"."+numericValue.substr(2)),
        $("strong.slip_price").html("R$ " + numericValue));
    }else{
        (numericValue=(numericValue-numericValue/100*7).toFixed(2).replace(".",","),
        numericValue.length > 6 && (numericValue=numericValue.charAt(0)+"."+numericValue.substr(1)),
        $("strong.slip_price").html("R$ " + numericValue));
    }
}
function fnPreBlackDiscountParcelado(){
    var VlrFull = document.querySelector("strong.skuBestPrice").textContent;
    var numericValue = parseFloat(VlrFull.replace("R$", "").replace(",", "").replace(".", "")) / 100;
    if(numericValue >= 10735){
        (numericValue=(numericValue-numericValue/100*7).toFixed(2).replace(".",","),
        numericValue.length > 6 && (numericValue=numericValue.charAt(0)+numericValue.charAt(1)+"."+numericValue.substr(2)),
        $("strong.skuBestPrice").html("R$ " + numericValue));
    }else{
        (numericValue=(numericValue-numericValue/100*7).toFixed(2).replace(".",","),
        numericValue.length > 6 && (numericValue=numericValue.charAt(0)+"."+numericValue.substr(1)),
        $("strong.skuBestPrice").html("R$ " + numericValue));
    }
}
$(document).ready(function(){
    let marketingData; // Declare a variável global
    async function getOrderFormData() {
        try {
            const orderForm = await vtexjs.checkout.getOrderForm();
            marketingData = orderForm.marketingData; // Atribua o valor à variável global
        } catch (error) {
            console.error("Erro ao obter os dados do pedido:", error);
        }
    }
    (async () => {
        await getOrderFormData();
        if(marketingData["coupon"] == "preblack" && $(".flag.pre-black-friday").length >= 1){
            fnPreBlackDiscount();
            fnPreBlackDiscountParcelado();
        }
    })(); 
});
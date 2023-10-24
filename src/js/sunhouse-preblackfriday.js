function fnAddPromoLink() {
    vtexjs.checkout.getOrderForm()
    .then(function(orderForm) { 
        var marketingData = orderForm.marketingData; 
        marketingData = { 
        'coupon': 'preblack',
        'utmSource': '',
        'utmCampaign': '',
        'utmMedium': '',
        'utmiCampaign': ''
        }; 
        
        return vtexjs.checkout.sendAttachment('marketingData', marketingData);
    }).done(function(orderForm) {
        console.log(orderForm); 
        console.log(orderForm.marketingData); 
    });
}

$(document).ready(function(){
    if (window.location.pathname == "/landing/lista-vip") {
        fnAddPromoLink();
    }
});
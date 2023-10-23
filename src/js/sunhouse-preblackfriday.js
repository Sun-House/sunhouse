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

function fnCatalogPrice() {
    var $priceSpans = $('.shelfProduct__price-best span');
    
    $priceSpans.each(function(index) {
        var $span = $(this);
        var originalPriceText = $span.text().replace('R$', '').trim();
        var originalPrice = parseFloat(originalPriceText.replace(',', '').replace('.', ''));
        
        var formattedPrice = (originalPrice / 100) * 0.9;
        var newPrice = 'R$ ' + formattedPrice.toFixed(2).replace('.', ',');
        
        $span.text(newPrice);
    });
}

$(document).ready(function () {
    if (window.location.pathname == "/landing/lista-vip") {
        fnAddPromoLink();
        fnCatalogPrice();
    }
});
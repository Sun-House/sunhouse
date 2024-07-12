// Nao esta em uso
// Usar para addcart pdp

function fnPdpAddtoCart() {
    $("body").on("click", "#addCart_main", (function (a) {
        a.preventDefault();
        //var b = $(this).parents(".shelfProduct").attr("data-id");
        var b = document.getElementById('codigo_produto').innerHTML;
        $.ajax({
            url: "/api/catalog_system/pub/products/search/?fq=productId:" + b,
            method: "GET",
            timeout: 0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).done((function (a) {
            var b = {
                id: a[0].items[0].itemId,
                quantity: 1,
                seller: "1"
            };
        }))
    }))
}
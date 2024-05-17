function fnAddtoCart() {
    $("body").on("click", ".add-to-cart", (function (a) {
        a.preventDefault();
        var b = $(this).parents(".shelfProduct").attr("data-id");
        $.ajax({
            url: "/api/catalog_system/pub/products/search/?fq=productId:" + b,
            method: "GET",
            timeout: 0,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).done((function (a) {
            if (a && a.length > 0 && a[0].items && a[0].items.length > 0 && a[0].items[0].itemId) {
                var b = {
                    id: a[0].items[0].itemId,
                    quantity: 1,
                    seller: "1"
                };
                vtexjs.checkout.addToCart([b], null, 1).done((function (a) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                        }
                    });
                    Toast.fire({
                        icon: "success",
                        title: "Produto adicionado ao carrinho!"
                    });
                    setTimeout(showMinicart, 1000);
                }));
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "Produto indisponível"
                });
            }
        }))
    }))
}

function showMinicart() {
    var miniCartBSOffCanvas = document.getElementById('mini-cart__sidebar');

    // Verifica se o carrinho já está visível
    if (miniCartBSOffCanvas.classList.contains('show')) {
        return; // Se estiver visível, retorna sem fazer mais nada
    }

    var bsOffcanvas = new bootstrap.Offcanvas(miniCartBSOffCanvas)
    bsOffcanvas.show();
}
// Ativar somente em epoca de Black
document.addEventListener("DOMContentLoaded", function () {
    setTimeout (function() {
        var cookieExists = document.cookie.includes("cDark=darktheme");

        if (cookieExists === true) {
            alert = "ja tem o cookie"
        } else {
            criarCookie();
        }
    }, 2000)
});
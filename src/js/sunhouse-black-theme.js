// Ativar somente em epoca de Black
document.addEventListener("DOMContentLoaded", function () {
    setTimeout (function() {
        var cookieExists = document.cookie.includes("cDark=darktheme");

        if (!cookieExists) {
            criarCookie();
        }
    }, 2000)
});
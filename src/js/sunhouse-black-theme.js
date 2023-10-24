// Ativar somente em epoca de Black
document.addEventListener("DOMContentLoaded", function () {
    //setTimeout (function() {
        const cookieExists = document.cookie.includes("cDark=darktheme");

        if (cookieExists === true) {
            alert("If: ja tem o cookie");
        } else {
            criarCookie();
            alert("Else: cookie criado agora");
        }
    //}, 2000)
});
// Ativar somente em epoca de Black
document.addEventListener("DOMContentLoaded", function () {
    //const cookieExists = document.cookie.includes("cDark=darktheme");
    const bcookieExists = document.cookie.includes("bDark=blacktheme");

    //document.cookie = "bDark=blacktheme; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";    

    if (bcookieExists === false) {
        //document.cookie = "cDark=darktheme; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
        criarCookie();
    } else {
        document.cookie = "cDark=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
});
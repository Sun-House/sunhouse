$(document).ready(function () {
    $("body").hasClass("login") && $("body").on("click", ".vtexIdUI-close", function () {
        //$("#vtexIdContainer,#vtexIdUI-global-loader").fadeOut(), window.location = "/";
        $("#vtexIdContainer,#vtexIdUI-global-loader").fadeOut(), window.history.back();
    })
});
"use strict";
$(document).ready(function () {
    var t = window.location.pathname.replace(/\//g, "");
    $(".authors .authorsName").html(t + ":"), $(".autores .content ul .box-banner").each(function () {
        var a = $(this).find("img").attr("alt").split("/")[0],
            i = "/" + t + "/" + $(this).find("img").attr("alt").split("/")[1],
            n = $(this).find("img").attr("src"),
            r = '<li>\t\t<a href="' + i + '">\t\t<div><img src="' + n + '" /></div>\t\t<strong>' + a + "</strong>\t\t</a>\t\t</li>";
        $(r).appendTo(".autores .content ul"), $(this).remove()
    })
});
function searchBoxFocus() {
    var searchBox = document.getElementById("sheader__search");
    window.innerWidth <= 1199 && (searchBox.classList.add("focusActive"), document.addEventListener("click", (function (event) {
        var targetElement = event.target,
            isDescendant;
        "sheader__search" !== targetElement.id && (searchBox.contains(targetElement) || searchBox.classList.remove("focusActive"))
    })))
}

function disableScroll() {
    document.body.addEventListener("touchmove", preventDefaultScroll, {
        passive: !1
    })
}

function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefaultScroll)
}

function preventDefaultScroll(event) {
    event.preventDefault()
}

function scrollDown() {
    window.scrollBy(0, 150)
}

function handleHeaderClick() {
    var headerMobileMenu;
    document.querySelector(".header__mobilemenu").addEventListener("click", (function () {
        scrollDown(), disableScroll()
    }))
}

function handleHambXClick() {
    var hambX;
    document.querySelector(".hambX").addEventListener("click", (function () {
        enableScroll()
    }))
}
$(document).ready((function () {
    document.querySelector(".fulltext-search-box").value = "Buscar Produtos...", document.querySelector(".fulltext-search-box").addEventListener("focus", (function () {
        "Buscar Produtos..." === this.value && (this.value = "")
    })), document.querySelector(".fulltext-search-box").addEventListener("focusout", (function () {
        "" === this.value && (this.value = "Buscar Produtos...")
    }))
})), handleHeaderClick(), handleHambXClick();
function criarCookie() {
    const nomeCookie = "cDark";
    const valorCookie = "darktheme";
    const dataExpiracao = new Date();
    dataExpiracao.setTime(dataExpiracao.getTime() + (365 * 24 * 60 * 60 * 1000));

    // Verifica se o body tem o background-color: #0d1117
    const bodyBgColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
    const isDarkMode = bodyBgColor === 'rgb(13, 17, 23)';

    // Verifica se o header pagina Pdp tem o background-color: #0d1117
    const pdpHeaderBgColor = window.getComputedStyle(document.querySelector('.wrapTemp')).getPropertyValue('background-color');
    const isPdpDarkMode = pdpHeaderBgColor === 'rgb(13, 17, 23)';
    
    if (isDarkMode == false || isPdpDarkMode == false) {
        // Cria o cookie
        document.cookie = `${nomeCookie}=${valorCookie}; expires=${dataExpiracao.toUTCString()}; path=/`;

        // Remove o atributo "disabled" do elemento com o ID "blackSH"
        document.getElementById("blackSH").removeAttribute("disabled");

        // Muda botao para modo Noite
        document.getElementById('ball').classList.add('cat');
    }
}

function removerCookie() {
    // Verifica se o body tem o background-color: #0d1117
    const bodyBgColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
    const isDarkMode = bodyBgColor === 'rgb(13, 17, 23)';

    // Verifica se o header pagina Pdp tem o background-color: #0d1117
    const pdpHeaderBgColor = window.getComputedStyle(document.querySelector('.wrapTemp')).getPropertyValue('background-color');
    const isPdpDarkMode = pdpHeaderBgColor === 'rgb(13, 17, 23)';

    if (isDarkMode == true || isPdpDarkMode == true) {
        // Remove o cookie
        document.cookie = `cDark=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

        // Adiciona o atributo "disabled" ao elemento com o ID "blackSH"
        document.getElementById("blackSH").setAttribute("disabled", true);

        // Muda botao para modo Dia
        document.getElementById('ball').classList.remove('cat');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Checa se o cookie existe e mantem tema
    if (document.cookie.indexOf("cDark=darktheme") !== -1) {
        document.getElementById("blackSH").removeAttribute("disabled");
        //document.getElementById('ball').classList.add('cat');
        document.querySelectorAll('.ball').classList.add('cat');
        //document.getElementById("checkbox").checked = true;
        document.querySelectorAll(".checkbox").checked = true;
    }
    
    // Checa se o cookie existe e caso nao existe, volta o tema original
    if (document.cookie.indexOf("cDark=darktheme") === -1) {
        document.getElementById("blackSH").setAttribute("disabled", true);
    }

    // Realiza o processo em looping de troca de tema e execucao das functions
    const checkbox = document.getElementById('checkbox');
    
    checkbox.addEventListener("change", function () {
        if (checkbox.checked == true) {
            criarCookie();
        } else {
            removerCookie();
        }
    });
});
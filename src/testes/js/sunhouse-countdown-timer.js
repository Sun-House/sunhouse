// Aponta a data que o contador considera para a regressiva
var diaExpiraElement = document.getElementById("diaExpira");
var diaExpiraString = diaExpiraElement.innerHTML;
var countDownDate = new Date(diaExpiraString).getTime();
//var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Atualiza a contagem a cada 1 segundo
var x = setInterval(function () {

    // Pega a data atual de hoje
    var now = new Date().getTime();

    // Encontra distancia entre hora atual e hora alvo da regressiva
    var distance = countDownDate - now;

    // Calculos para dias, horas, minutos e segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Joga o resultado no elemento com id "regressTimer"
    var cronoElement = [document.getElementById("regressTimer"), document.getElementById("regressTimerMob")];
    //cronoElement[0].innerHTML = "<pre>Faltam:</pre>" + days + " dias, " + hours + " horas e " + minutes + " minutos\nPara acabar! Corre!!";
    //cronoElement[0].innerHTML = "<pre>Faltam:</pre>" + days + "<pre> dias, " + hours + " horas e " + minutes + " minutos</pre>Para acabar! Corre!!";
    cronoElement[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    cronoElement[1].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // Se a contagem tiver acabado, mostra um texto em tela
    if (distance < 0) {
        clearInterval(x);
        cronoElement[0].innerHTML = "Encerrada";
        cronoElement[1].innerHTML = "Encerrada";
    }
}, 1000);



// HTML:

//<p id="regressTimer"></p> - desktop
//<p id="regressTimerMob"></p> - mobile *caso precise*
//<p id="diaExpira" style="display: none !important;">Nov 06, 2023 00:00:01</p>
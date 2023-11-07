// Configura a data que a contagem ira acabar
var diaExpiraElement = document.getElementById("diaExpira");
var diaExpiraString = diaExpiraElement.innerHTML;
var countDownDate = new Date(diaExpiraString).getTime();

// Atualiza a contagem a cada 1 segundo
var x = setInterval(function () {
    // Pega o data atual
    var now = new Date().getTime();

    // Encontra a distancia entre agora e a data onde acaba a contagem
    var distance = countDownDate - now;

    // Calcula os dias, horas, minutos e segundos
    //var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Calcula os dias, horas, minutos e segundos com zero a esquerda
    var days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    var hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    var minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    var seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    // Aloca a o resultado dos calculos nos elementos devidamente apontados abaixo
    var cronoElementInfo = document.gerElementById("croTimerInfo");
    var cronoElementDay = document.getElementById("croTimerDay");
    var cronoElementHour = document.getElementById("croTimerHour");
    var cronoElementMinute = document.getElementById("croTimerMin");
    var cronoElementSecond = document.getElementById("croTimerSec");

    cronoElementDay.innerHTML = days;
    cronoElementHour.innerHTML = hours;
    cronoElementMinute.innerHTML = minutes;
    cronoElementSecond.innerHTML = seconds;

    // Se a contagem zerou, escreve algum texto - por hora nao pretendo usar
    if (distance < 0) {
        clearInterval(x);
        cronoElementInfo.innerHTML = "Encerrado";
        cronoElementDay.innerHTML = "0";
        cronoElementHour.innerHTML = "0";
        cronoElementMinute.innerHTML = "0";
        cronoElementSecond.innerHTML = "0";
    }
}, 1000);

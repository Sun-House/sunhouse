//timer js
//importado de w3schools: https://www.w3schools.com/howto/howto_js_countdown.asp

// Set the date we're counting down to
var diaExpiraElement = document.getElementById("diaExpira");
var diaExpiraString = diaExpiraElement.innerHTML;
var countDownDate = new Date(diaExpiraString).getTime();
//var countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="croTimer"
  var cronoElement = [document.getElementById("croTimer"),document.getElementById("croTimerMob")];
  //cronoElement[0].innerHTML = "<pre>Faltam:</pre>" + days + " dias, " + hours + " horas e " + minutes + " minutos\nPara acabar! Corre!!";
  //cronoElement[0].innerHTML = "<pre>Faltam:</pre>" + days + "<pre> dias, " + hours + " horas e " + minutes + " minutos</pre>Para acabar! Corre!!";
  cronoElement[0].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  cronoElement[1].innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    cronoElement[0].innerHTML = "Encerrada :(";
    cronoElement[1].innerHTML = "Encerrada :(";
  }
}, 1000);

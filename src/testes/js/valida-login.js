// Ajustar abaixo para mostrar apenas uma vez - via cookie - e sumir depois do primeiro login - por sessão no caso

// Valida se o usuario esta logado, se ESTIVER, ele faz algo
// nesse bloco do if, colocar a acao de trocar os elementos html que se referem ao usuario logado e ao usuario deslogado

document.addEventListener('DOMContentLoaded', function () {
    userLoginArea();
});

//document.addEventListener("DOMContentLoaded", function () {
    //setTimeout(function () {
        //userLoginArea();
    //}, 2000); // 2 segundo
//});

function userLoginArea() {
    if (typeof dataLayer !== 'undefined') {

        // Itera sobre as entradas no dataLayer
        for (var i = 0; i < dataLayer.length; i++) {

            // Verifica se a entrada "visitorLoginState" existe e possui o valor true
            if (dataLayer[i].visitorLoginState === true) {

                // Faça algo se a condição for atendida
                console.log("TRUE. Esta logado");
                document.getElementById('login__notLogged').style.display = 'none';
                document.getElementById('login__loggedIn').style.display = 'block';

                // Inicialize o popover no botão
                $('#logged_in').popover();

                // Mostre o popover
                $('#logged_in').popover('show');

                // Oculte o popover após 5 segundos
                setTimeout(function () {
                    $('#logged_in').popover('hide');
                }, 5000);

                // Se desejar interromper a iteração após encontrar a primeira ocorrência,
                // você pode usar o break
                break;
            } //else { // else apenas para teste e depuracao
                //console.log('FALSE. Não esta logado');
            //}
        }
    }
}
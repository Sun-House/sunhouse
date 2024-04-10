// Verifica se esta logado
function userLoginArea() {
    setTimeout(function () {
        if (typeof dataLayer !== 'undefined') {
            var isLoggedIn = false; // Adicione uma variável para controlar o estado de login
    
            // Itera sobre as entradas no dataLayer
            for (var i = 0; i < dataLayer.length; i++) {
                // Verifica se a entrada "visitorLoginState" existe e possui o valor true
                if (dataLayer[i].visitorLoginState === true) {
                    // ... Se a condição for atendida ...
                    isLoggedIn = true; // Atualiza o estado de login
                    break; // Interrompe o for de continuar verificando apos condicao acima ser verdadeira
                }
            }
    
            if (isLoggedIn) {
                var loginNotLogged = document.querySelectorAll('.login-notLogged');
                var loginLoggedIn = document.querySelectorAll('.login-loggedIn');
    
                loginNotLogged.forEach(function(loginNotLogged_alvo) {
                    loginNotLogged_alvo.style.display = 'none';
                });
    
                loginLoggedIn.forEach(function(loginLoggedIn_alvo) {
                    loginLoggedIn_alvo.style.display = 'block';
                });
    
                // Seleciona todos os elementos com a Classe "logged-in" e executa o popover em cada um
                $('.logged-in').each(function() {
                    if ($(window).width() >= 1200) {
                        $(this).popover('show');
                    
                        var popElements = $(this);
                        setTimeout(function() {
                            popElements.popover('hide');
                            popElements.popover('dispose');
                        }, 3000);
                    };

                    document.querySelector('#wrap-topbar a').style.setProperty('display', 'none', 'important');

                    moveLoggedBlock();
                });
            }

            // Reposiciona Elementos
            function moveLoggedBlock() {
                if ($(window).width() <= 1199) {
                    $("#login__loggedIn").appendTo("#mobile-login__loggedIn");
                } else {
                    // Volte o conteúdo para o local original se a largura for maior que 1199px
                    $("#login__loggedIn").appendTo("#desk-login__loggedIn");
                }
            }

            $(document).ready(function () {
                moveLoggedBlock();
            });

            $(window).resize(function () {
                moveLoggedBlock();
            });
        }
    }, 2000);
}

// Executa function de Validar Login
document.addEventListener('DOMContentLoaded', function () {
    userLoginArea();
});

// Botao para Sair-Deslogar
function customLogout() {
    $.ajax({
        url: "/no-cache/user/logout"
    }).done(function () {
        // Aqui você pode adicionar qualquer lógica personalizada que deseja executar após a conclusão da requisição AJAX
        console.log("Logout realizado com sucesso!");

        // Agora, redirecione para a página atual
        window.location.reload(); // Isso recarrega a página atual, mantendo-a dinâmica
    });
}
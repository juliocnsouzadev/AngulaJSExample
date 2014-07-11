//indicamos a dependencia do modulo ngRoute
var app = angular.module('Funcionarios', ['ngRoute']);

//cria rotas
app.config(function($routeProvider) {
    //quando a url for /, preencha o conteúdo 
    //de ng-view da index.html com o conteúdo 
    //da view parcial bem-vindo.tpl.html.
    $routeProvider.when('/', {
        templateUrl: 'partials/bem-vindo.tpl.html'
    });

    //quando a url for /funcionarios, preencha o conteúdo 
    //de ng-view da index.html com o conteúdo 
    //da view parcial bem-vindo.tpl.html.
    $routeProvider.when('/funcionarios', {
        templateUrl: 'partials/funcionarios.tpl.html'
    });

    //quando alguma rota desconhecida for 
    //digitada na URL, direcionaremos para 
    //a view bem-vindo.tpl.html:
    $routeProvider.otherwise({redirectTo: '/'});
});
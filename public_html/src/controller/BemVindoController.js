app.controller('BemVindoController', function($scope, FuncionarioService) {

    $scope.funcionarios = [];

    function listaFuncionarios() {
        FuncionarioService.query(function(retorno) {
            $scope.funcionarios = retorno;
            $scope.mostra = true;
        });
    }

    listaFuncionarios();

});
app.controller('FuncionariosController', function($scope, $http, FuncionarioService) {

    $scope.funcionarios = [];
    $scope.mensagem = '';
    $scope.mostra = true;

    function listaFuncionarios() {
        FuncionarioService.query(function(retorno) {
            $scope.funcionarios = retorno;
            $scope.mostra = true;
        });
    }

    listaFuncionarios();

    FuncionarioService.get('/funcionarios/1', function(retorno) {
        console.log(retorno);
    });


    $scope.remove = function(funcionario) {
        resource.delete({id: funcionario.id}, function(status) {
            listaFuncionarios();
        });
    };

//    $http.get('/funcionarios').success(function(retorno) {
//        $scope.funcionarios = retorno;
//    }).error(function() {
//        $scope.mensagem = 'Falha ao buscar funcionários';
//        $scope.mostra = false;
//    });
});
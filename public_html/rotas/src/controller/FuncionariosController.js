app.controller('FuncionariosController', function($scope) {

    function Funcionario(name, age) {
        this.age = age;
        this.name = name;
    }

    $scope.funcionarios = [
        new Funcionario("Carlos", 22),
        new Funcionario("Roberta", 21),
        new Funcionario("Felipe", 25)
    ];

    $scope.mostra = true;
});
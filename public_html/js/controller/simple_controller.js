function simpleController($scope)
{
    $scope.user = {name: '', age: ''};
}

function simpleMult($scope)
{
    $scope.values = {number0ne: 1, numberTwo: 1};
    $scope.result = $scope.values.number0ne * $scope.values.numberTwo;
}
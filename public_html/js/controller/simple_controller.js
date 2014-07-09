app.controller('simpleController', function simpleController($scope)
{
    $scope.total = 0;


    $scope.incrementar = function()
    {
        $scope.total++;
    };
});


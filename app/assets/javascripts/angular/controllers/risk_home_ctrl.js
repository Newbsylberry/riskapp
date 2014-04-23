app.controller('RiskHomeCtrl', ['$scope', '$routeParams', 'Risk',
    function($scope, $routeParams, Risk) {
        Risk.get({riskId: $routeParams.riskId}, function(successResponse) {
            $scope.risk = successResponse;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });

        $scope.display = '';


    }]);
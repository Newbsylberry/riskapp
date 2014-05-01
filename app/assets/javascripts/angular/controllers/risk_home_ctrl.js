app.controller('RiskHomeCtrl', ['$scope', '$routeParams', 'Risk',
    function($scope, $routeParams, Risk) {
        Risk.get({riskId: $routeParams.riskId}, function(successResponse) {
            $scope.risk = successResponse;
            $scope.key_words = successResponse.name.split(" ");
            $scope.risk_historicals = successResponse.risk_historicals;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
            angular.forEach(successResponse.related_risks, relatedRisk(successResponse.name, related_risk))
        });

    }]);
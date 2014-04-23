app.controller('RiskHomeCtrl', ['$scope', '$routeParams', 'Risk',
    function($scope, $routeParams, Risk) {
        Risk.get({riskId: $routeParams.riskId}, function(successResponse) {
            $scope.risk = successResponse;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
            angular.forEach(successResponse.related_risks, relatedRisk(successResponse.name, related_risk))
        });

        $scope.display = '';

        var relatedRisk = function(risk_name, related_risk_name) {
            var riskNameArray = risk_name.split(" ")
            var relatedNameArray = related_risk_name.split(" ")
            var relatedWords = {};
            for(var i = 0; i < riskNameArray.length; i++) {
                relatedWords[riskNameArray[i]] = true;
            }
            for(var i = 0; i < relatedNameArray.length; i++) {
                if(relatedWords[relatedNameArray[i]]) {
                    console.log("Duplicate words " + relatedWords[i]);
                }
            }
        }

    }]);
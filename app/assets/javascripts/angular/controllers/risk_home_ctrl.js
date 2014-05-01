app.controller('RiskHomeCtrl', ['$scope', '$routeParams', 'Risk',
    function($scope, $routeParams, Risk) {
        $scope.display = 'risk_history';

        Risk.get({riskId: $routeParams.riskId}, function(successResponse) {
            $scope.risk = successResponse;
            $scope.key_words = successResponse.name.split(" ");
            $scope.risk_historicals = successResponse.risk_historicals;
            $scope.related_risks = successResponse.related_risks;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
            angular.forEach(successResponse.related_risks, relatedRisk(successResponse.name, related_risk))
        });

        $scope.updateRisk = function() {
            var attr = {};
            attr.id = ($scope.risk.id);
            attr.project_id = ($scope.risk.project_id);
            attr.name = ($scope.risk.name);
            attr.description = ($scope.risk.description);
            attr.early_impact_date = ($scope.updatedRisk.early_impact_date);
            attr.late_impact_date = ($scope.updatedRisk.late_impact_date);
            attr.impact_rating = ($scope.updatedRisk.impact_rating);
            attr.probability = ($scope.updatedRisk.probability / 100 );
            attr.schedule_impact = ($scope.updatedRisk.schedule_impact);
            attr.event_id = ($scope.updatedRisk.event_id);
            attr.risk_type_id = ($scope.updatedRisk.risk_type_id);
            attr.risk_status_id = ($scope.updatedRisk.risk_status_id);
            attr.risk_control_category_id = ($scope.updatedRisk.risk_control_category_id);
            attr.project_id = ($scope.updatedRisk.project_id);
            attr.critical = ($scope.updatedRisk.critical);
            attr.owner = ($scope.updatedRisk.owner);
            var updatedRisk = Risk.update(attr);
            $scope.risk = updatedRisk;
            $scope.risk_historicals.push(updatedRisk);
            $scope.updatedRisk.early_impact_date = null;
            $scope.updatedRisk.late_impact_date = null;
            $scope.updatedRisk.impact_rating = null;
            $scope.updatedRisk.probability = null;
            $scope.updatedRisk.schedule_impact = "";
            $scope.updatedRisk.critical ="";
            $scope.updatedRisk.risk_type_id = "";
            $scope.updatedRisk.risk_status_id = "";
            $scope.updatedRisk.risk_control_category_id = "";
            $scope.updatedRisk.owner = null;
        };



    }]);
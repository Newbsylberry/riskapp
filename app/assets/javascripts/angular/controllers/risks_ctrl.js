app.controller('RisksCtrl', ['$scope', 'Risk', function($scope, Risk) {
    $scope.risks = Risk.all();

    $scope.createRisk = function() {
        var attr = {};
        attr.name = ($scope.newRisk.name);
        attr.description = ($scope.newRisk.description);
        attr.early_impact_date = ($scope.newRisk.early_impact_date);
        attr.late_impact_date = ($scope.newRisk.late_impact_date);
        attr.impact_rating = ($scope.newRisk.impact_rating);
        attr.probability = ($scope.newRisk.probability / 100 );
        attr.schedule_impact = ($scope.newRisk.schedule_impact);
        attr.event_id = ($scope.newRisk.event_id);
        attr.risk_type_id = ($scope.newRisk.risk_type_id);
        attr.risk_status_id = ($scope.newRisk.risk_status_id);
        attr.risk_control_category_id = ($scope.newRisk.risk_control_category_id);
        attr.project_id = ($scope.newRisk.project_id);
        attr.critical = ($scope.newRisk.critical);
        attr.owner = ($scope.newRisk.owner);
        var newRisk = Risk.create(attr);
        $scope.risks.push(newRisk);
        $scope.newRisk.name = "";
        $scope.newRisk.description = "";
        $scope.newRisk.early_impact_date = "";
        $scope.newRisk.late_impact_date = "";
        $scope.newRisk.impact_rating = "";
        $scope.newRisk.probability = "";
        $scope.newRisk.schedule_impact = "";
        $scope.newRisk.critical ="";
        $scope.newRisk.project_id = "";
        $scope.newRisk.risk_type_id = "";
        $scope.newRisk.risk_status_id = "";
        $scope.newRisk.risk_control_category_id = "";
        $scope.newRisk.owner = "";
        if($scope.portfolio.risks == null) {
            $scope.portfolio.risks = [];
        }
        $scope.portfolio.risks.push(newRisk)
    };

    $scope.updateRisk = function() {
        var attr = {};
        attr.id = ($scope.risk.id);
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
        Risk.update(attr);
    }


    $scope.deleteRisk = function(id, idx) {
        $scope.risks.splice(idx, 1);
        var risks = $scope.project.risks;
        risks.splice(idx, 1);


        return Risk.delete(id);
    };
}]);
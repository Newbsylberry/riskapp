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
        attr.project_id = ($scope.project.id);
        attr.critical = ($scope.newRisk.critical);
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
        if($scope.project.risks == null) {
            $scope.project.risks = [];
        }
        $scope.project.risks.push(newRisk);
    };

    $scope.orderProp = 'impact_rating';

    $scope.deleteRisk = function(id, idx) {
        $scope.risks.splice(idx, 1);
        var risks = $scope.project.risks;
        risks.splice(idx, 1);

        return Risk.delete(id);
    };
}]);
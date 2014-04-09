app.controller('RiskStatusesCtrl', ['$scope', 'RiskStatuses', function($scope, RiskStatuses) {
    $scope.risk_statuses = RiskStatuses.all();

    $scope.createRiskStatus = function() {
        var attr = {};
        attr.name = ($scope.newRiskStatus.name);
        attr.description = ($scope.newRiskStatus.description);
        attr.portfolio_id = ($scope.portfolio.id);
        var newRiskStatus = RiskStatuses.create(attr);
        $scope.risk_statuses.push(newRiskStatus);
        $scope.newRiskStatus.name = "";
        $scope.newRiskStatus.description = "";

        if($scope.portfolio.risk_statuses == null) {
            $scope.portfolio.risk_statuses = [];
        }
        $scope.portfolio.risk_statuses.push(newRiskStatus);
    };

    $scope.deleteRiskStatus = function(id, idx) {
        $scope.risk_statuses.splice(idx, 1);

        // .splice removes one (1) element from the array index (idx is index)
        var risk_statuses = $scope.portfolio.risk_statuses;
        risk_statuses.splice(idx, 1);
        return RiskStatuses.delete(id);
    };
}]);
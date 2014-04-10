app.controller('RiskTypesCtrl', ['$scope', 'RiskTypes', function($scope, RiskTypes) {
    $scope.risk_types = RiskTypes.all();

    $scope.createRiskType = function() {
        var attr = {};
        attr.name = ($scope.newRiskType.name);
        attr.description = ($scope.newRiskType.description);
        attr.portfolio_id = ($scope.portfolio.id);
        var newRiskType = RiskTypes.create(attr);
        $scope.risk_types.push(newRiskType);
        $scope.newRiskType.name = "";
        $scope.newRiskType.description = "";

        if($scope.portfolio.risk_types == null) {
            $scope.portfolio.risk_types = [];
        }
        $scope.portfolio.risk_types.push(newRiskType);
    };

    $scope.deleteRiskType = function(id, idx) {
        $scope.risk_types.splice(idx, 1);

        // .splice removes one (1) element from the array index (idx is index)
        var risk_types = $scope.portfolio.risk_types;
        risk_types.splice(idx, 1);
        return RiskTypes.delete(id);
    };
}]);
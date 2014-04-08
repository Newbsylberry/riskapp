app.controller('RiskControlCatCtrl', ['$scope', 'RiskControlCat', function($scope, RiskControlCat) {
    $scope.risk_control_categories = RiskControlCat.all();

    $scope.createRiskControlCat = function() {
        var attr = {};
        attr.name = ($scope.newRiskControlCat.name);
        attr.description = ($scope.newRiskControlCat.description);
        attr.portfolio_id = ($scope.portfolio.id);
        var newRiskControlCat = RiskControlCat.create(attr);
        $scope.risk_control_categories.push(newRiskControlCat);
        $scope.newRiskControlCat.name = "";
        $scope.newRiskControlCat.description = "";

        if($scope.portfolio.risk_control_categories == null) {
            $scope.portfolio.risk_control_categories = [];
        }
        $scope.portfolio.risk_control_categories.push(newRiskControlCat);
    };

    $scope.deleteRiskControlCat = function(id, idx) {
        $scope.risk_control_categories.splice(idx, 1);

        // .splice removes one (1) element from the array index (idx is index)
        var risk_control_categories = $scope.portfolio.risk_control_categories;
        risk_control_categories.splice(idx, 1);
        return RiskControlCat.delete(id);
    };
}]);
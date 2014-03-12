app.controller('RisksCtrl', ['$scope', 'Risk', function($scope, Risk) {
    $scope.risks = Risk.all();

    $scope.createRisk = function() {
        var attr = {};
        attr.name = ($scope.newRisk.name);
        attr.description = ($scope.newRisk.description);
        var newRisk = Risk.create(attr);
        $scope.risks.push(newRisk);
        $scope.newRisk.name = "";
        $scope.newRisk.description = "";
    };

    $scope.deleteRisk = function(id, idx) {
        $scope.risks.splice(idx, 1);
        return Risk.delete(id);
    };
}]);
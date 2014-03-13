app.controller('PortfoliosCtrl', ['$scope', 'Portfolio', function($scope, Portfolio) {
    $scope.portfolios = Portfolio.all();

    $scope.createPortfolio = function() {
        var attr = {};
        attr.name = ($scope.newPortfolio.name);
        attr.description = ($scope.newPortfolio.description);
        var newPortfolio = Portfolio.create(attr);
        $scope.portfolios.push(newPortfolio);
        $scope.newPortfolio.name = "";
        $scope.newPortfolio.description = "";
    };

    $scope.deletePortfolio = function(id, idx) {
        $scope.portfolios.splice(idx, 1);
        return Portfolio.delete(id);
    };
}]);
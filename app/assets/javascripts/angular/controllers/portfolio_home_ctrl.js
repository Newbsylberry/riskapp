app.controller('PortfolioHomeCtrl', ['$scope', '$routeParams', 'Portfolio',
    function($scope, $routeParams, Portfolio) {
    $scope.portfolio = Portfolio.get({portfolioId: $routeParams.portfolioId});
    }]);

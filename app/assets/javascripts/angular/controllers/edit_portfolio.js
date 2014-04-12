app.controller('EditPortfolioCtrl', ['$scope', '$routeParams', 'Portfolio',
    function($scope, $routeParams, Portfolio) {

        $scope.display = 'general_portfolio_config';

        Portfolio.get({portfolioId: $routeParams.portfolioId}, function(successResponse) {
            $scope.portfolio = successResponse;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });
    }]);


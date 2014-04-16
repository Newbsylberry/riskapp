app.controller('PortfolioHomeCtrl', ['$scope', '$routeParams', 'Portfolio',
    function($scope, $routeParams, Portfolio) {

        $scope.display = 'portfolio_dashboard';
        $scope.side_display = '';

        // addRiskToChart pushes the risks from the Portfolio.get into chartConfig.series.data
        //  so that it can be displayed in html
        var addRiskToChart = function(risk) {
            $scope.chartConfig.series[0].data.push([risk.name, risk.exposure]);
        };
        Portfolio.get({portfolioId: $routeParams.portfolioId}, function(successResponse) {
            $scope.portfolio = successResponse;
            $scope.chartConfig.title.text = successResponse.name;
            console.log("success response " + successResponse );
            console.log(successResponse);
            angular.forEach(successResponse.risks, addRiskToChart);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });
        $scope.chartConfig = {
            options: {
                chart: {
                    type: 'pie'
                }
            },
            series: [{
                data: []
            }],
            title: {
                text: 'Loading...'
            },

            loading: false
        }


}]);


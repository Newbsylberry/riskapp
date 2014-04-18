app.controller('PortfolioHomeCtrl', ['$scope', '$routeParams', 'Portfolio',
    function($scope, $routeParams, Portfolio) {

        $scope.display = 'portfolio_dashboard';
        $scope.side_display = '';

        // addRiskToChart pushes the risks from the Portfolio.get into chartConfig.series.data
        //  so that it can be displayed in html
        var addProjectToChart = function(project) {
            $scope.pieChartConfig.series[0].data.push([project.name, parseFloat(project.total_exposure)]);
        };


        Portfolio.get({portfolioId: $routeParams.portfolioId}, function(successResponse) {
            $scope.portfolio = successResponse;
            $scope.pieChartConfig.title.text = successResponse.name;
            $scope.barChartConfig.series[0].data.push(['Short Term Exposure',
                parseFloat(successResponse.short_term_exposure)]);
            $scope.barChartConfig.series[0].data.push(['Mid Term Exposure',
                parseFloat(successResponse.mid_term_exposure)]);
            $scope.barChartConfig.series[0].data.push(['Long Term Exposure',
                parseFloat(successResponse.long_term_exposure)]);
            console.log("success response " + successResponse );
            console.log(successResponse);
            angular.forEach(successResponse.projects, addProjectToChart);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });
        $scope.pieChartConfig = {
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
        $scope.barChartConfig = {
            options: {
                chart: {
                    type: 'pie'
                }
            },
            series: [{
                data: []
            }],
            title: {
                text: 'Portfolio Exposure by Timeline'
            },
            loading: false
        }


    }]);
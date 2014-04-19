app.controller('PortfolioHomeCtrl', ['$scope', '$routeParams', 'Portfolio',
    function($scope, $routeParams, Portfolio) {

        $scope.display = 'portfolio_dashboard';
        $scope.side_display = '';

        // addRiskToChart pushes the risks from the Portfolio.get into chartConfig.series.data
        //  so that it can be displayed in html
        var addProjectToChart = function(project) {
            $scope.pieChartConfig.series[0].data.push([project.name, parseFloat(project.total_exposure)]);
        };

        var addShortRiskToScatter = function(risk) {
            $scope.scatterPlotConfig.series[0].data.push([risk.impact_rating, parseFloat(risk.probability)]);
        };
        var addMidRiskToScatter = function(risk) {

            $scope.scatterPlotConfig.series[1].data.push([risk.impact_rating, parseFloat(risk.probability)]);
        };
        var addLongRiskToScatter = function(risk) {
            $scope.scatterPlotConfig.series[2].data.push([risk.impact_rating, parseFloat(risk.probability)]);
        };


        Portfolio.get({portfolioId: $routeParams.portfolioId}, function(successResponse) {
            $scope.portfolio = successResponse;
            $scope.pieChartConfig.title.text = successResponse.name;
            // Push short, mid, and long term risks to chart
            $scope.barChartConfig.series[0].data.push([
                parseFloat(successResponse.short_term_exposure)]);
            $scope.barChartConfig.series[1].data.push([
                parseFloat(successResponse.mid_term_exposure)]);
            $scope.barChartConfig.series[2].data.push([
                parseFloat(successResponse.long_term_exposure)]);
            // Display each short term risk on scatter plot
            angular.forEach(successResponse.short_term_risks, addShortRiskToScatter )
            // Display each medium term risk on scatter plot
            angular.forEach(successResponse.mid_term_risks, addMidRiskToScatter )
            // Display each long term risk on scatter plot
            angular.forEach(successResponse.long_term_risks, addLongRiskToScatter )
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
                    type: 'bar'
                }
            },
            series: [{
                name: 'Short Term Risks',
                data: []
            }, {
                name: 'Mid Term Risks',
                data: []
            }, {
                name: 'Long Term Risks',
                data: []
            }],
            title: {
                text: 'Portfolio Exposure by Timeline'
            },
            loading: false
        }
        $scope.scatterPlotConfig = {
            options: {
                chart: {
                    type: 'scatter'
                },
                zoomType: 'xy'
            },
            series: [{
                name: 'Short Term Risks',
                data: []
            }, {
                name: 'Medium Term Risks',
                data: []
            }, {
                name: 'Long Term Risks',
                data: []
            }],
            title: {
                text: 'Portfolio Risk Distribution'
            },
            loading: false
        }


    }]);
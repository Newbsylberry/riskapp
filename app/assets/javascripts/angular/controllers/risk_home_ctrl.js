app.controller('RiskHomeCtrl', ['$scope', '$routeParams', 'Risk',
    function($scope, $routeParams, Risk) {
        $scope.display = 'risk_dashboard';

        var dashAddProbability = function(risk) {
            $scope.riskDashboardConfig.series[0].data.push([risk.created_at, parseFloat(risk.probability * 100)
                ]);
        };
        var dashAddImpact = function(risk) {
            $scope.riskDashboardConfig.series[1].data.push([risk.created_at, parseFloat(risk.impact_rating)
            ]);
        };
        var dashAddExposure = function(risk) {
            $scope.riskDashboardConfig.series[2].data.push([risk.created_at, parseFloat(risk.exposure)
            ]);
        };

        var dashAddBands = function(risk) {
            var probability = {};
            probability.value = risk.probability * 100;
            probability.color = 'blue';
            probability.width = 2;
            var label = {};
            label.text = 'Current Risk Probability: ' + risk.probability * 100 + "%";
            probability.label = label;
            probability.zIndex = 10;
            probability.dashStyle = 'Dot';
            $scope.riskDashboardConfig.yAxis.plotLines.push(probability);
            var impact_rating = {};
            impact_rating.value = risk.impact_rating;
            impact_rating.color = 'black';
            impact_rating.width = 2;
            var label = {};
            label.text = 'Current Risk Impact Rating: ' + risk.impact_rating;
            impact_rating.label = label;
            impact_rating.zIndex = 10;
            impact_rating.dashStyle = 'LongDashDotDot';
            $scope.riskDashboardConfig.yAxis.plotLines.push(impact_rating);
            var exposure = {};
            exposure.value = risk.exposure;
            exposure.color = 'green';
            exposure.width = 2;
            var label = {};
            label.text = 'Current Risk Exposure: ' + risk.exposure;
            exposure.label = label;
            exposure.zIndex = 10;
            exposure.dashStyle = 'Solid';
            $scope.riskDashboardConfig.yAxis.plotLines.push(exposure);
        };

        Risk.get({riskId: $routeParams.riskId}, function(successResponse) {
            dashAddBands(successResponse);
            $scope.risk = successResponse;
            angular.forEach(successResponse.risks, dashAddBands);
            $scope.key_words = successResponse.name.split(" ");
            $scope.risk_historicals = successResponse.risk_historicals;
            angular.forEach(successResponse.risk_historicals, dashAddProbability);
            angular.forEach(successResponse.risk_historicals, dashAddImpact);
            angular.forEach(successResponse.risk_historicals, dashAddExposure);
            $scope.related_risks = successResponse.related_risks;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
            angular.forEach(successResponse.related_risks, relatedRisk(successResponse.name, related_risk))
        });

        $scope.updateRisk = function() {
            var attr = {};
            attr.id = ($scope.risk.id);
            attr.project_id = ($scope.risk.project_id);
            attr.name = ($scope.risk.name);
            attr.description = ($scope.risk.description);
            attr.early_impact_date = ($scope.updatedRisk.early_impact_date);
            attr.late_impact_date = ($scope.updatedRisk.late_impact_date);
            attr.impact_rating = ($scope.updatedRisk.impact_rating);
            attr.probability = ($scope.updatedRisk.probability / 100 );
            attr.schedule_impact = ($scope.updatedRisk.schedule_impact);
            attr.event_id = ($scope.updatedRisk.event_id);
            attr.risk_type_id = ($scope.updatedRisk.risk_type_id);
            attr.risk_status_id = ($scope.updatedRisk.risk_status_id);
            attr.risk_control_category_id = ($scope.updatedRisk.risk_control_category_id);
            attr.project_id = ($scope.updatedRisk.project_id);
            attr.critical = ($scope.updatedRisk.critical);
            attr.owner = ($scope.updatedRisk.owner);
            var updatedRisk = Risk.update(attr);
            $scope.risk = updatedRisk;
            $scope.risk_historicals.push(updatedRisk);
            $scope.updatedRisk.early_impact_date = null;
            $scope.updatedRisk.late_impact_date = null;
            $scope.updatedRisk.impact_rating = null;
            $scope.updatedRisk.probability = null;
            $scope.updatedRisk.schedule_impact = "";
            $scope.updatedRisk.critical ="";
            $scope.updatedRisk.risk_type_id = "";
            $scope.updatedRisk.risk_status_id = "";
            $scope.updatedRisk.risk_control_category_id = "";
            $scope.updatedRisk.owner = null;
        };


        $scope.riskDashboardConfig = {
            options: {
                chart: {
                    type: 'line'
                },
                zoomType: 'xy'
            },
            series: [{
                name: 'Probability',
                data: []
            }, {
                name: 'Impact Rating',
                data: []
            }, {
                name: 'Exposure',
                data: []
            }],
            title: {
                text: 'Risk History'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                plotLines:[]
            },
            loading: false
        }



    }]);
var app = angular.module("RiskPortfolio", [
    'ngResource',
    'ngRoute',
    'templates'
    ]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'portfolios.html',
                controller: 'PortfoliosCtrl'
            }).
            when('/risks', {
                templateUrl: 'risks.html',
                controller: 'RisksCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
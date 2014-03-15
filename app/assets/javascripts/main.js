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
            when('/:portfolioId', {
                templateUrl: 'portfolio_home.html',
                controller: 'PortfolioHomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
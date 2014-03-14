var app = angular.module("RiskPortfolio", [
    'ngResource',
    'ngRoute',
    'templates'
    ]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'portfolio_list.html',
                controller: 'PortfoliosCtrl'
            }).
            when('/:portfolioId', {
                templateUrl: 'portfolio_home.html',
                controller: 'PortfolioHomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
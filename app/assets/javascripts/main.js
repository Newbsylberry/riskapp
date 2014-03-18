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
            when('/portfolio_home/:portfolioId', {
                templateUrl: 'portfolio_home.html',
                controller: 'PortfolioHomeCtrl'
            }).
            when('/project_home/:projectId', {
                templateUrl: 'project_home.html',
                controller:  'ProjectHomeCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
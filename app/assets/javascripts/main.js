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
            when('/edit_portfolio/:portfolioId', {
                templateUrl: 'edit_portfolio.html',
                controller: 'EditPortfolioCtrl'
            }).
            when('/project_home/:projectId', {
                templateUrl: 'project_home.html',
                controller:  'ProjectHomeCtrl'
            }).
            when('/edit_project/:projectId', {
                templateUrl: 'edit_project.html',
                controller: 'EditProjectCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
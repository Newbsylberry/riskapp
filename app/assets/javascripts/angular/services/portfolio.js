app.factory('Portfolio', ['$resource', function($resource) {
    function Portfolio() {
        this.service = $resource('/api/portfolios/:portfolioId', {portfolioId: '@id'});
    };
    Portfolio.prototype.all = function() {
        return this.service.query();
    };
    Portfolio.prototype.delete = function(pId) {
        this.service.remove({portfolioId: pId});
    };
    Portfolio.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Portfolio;
}]);
app.factory('Risk', ['$resource', function($resource) {
    function Risk() {
        this.service = $resource('/api/risks/:riskId', {riskId: '@id'});
    };
    Risk.prototype.all = function() {
      return this.service.query();
    };
    Risk.prototype.delete = function(rsId) {
        this.service.remove({riskId: rsId});
    };
    Risk.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Risk.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Risk;
}]);
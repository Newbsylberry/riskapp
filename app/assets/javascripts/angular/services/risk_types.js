app.factory('RiskTypes', ['$resource', function($resource) {
    function RiskTypes() {
        this.service = $resource('/api/risk_types/:risk_type_Id',
            {risk_type_Id: '@id'});
    };
    RiskTypes.prototype.all = function() {
        return this.service.query();
    };
    RiskTypes.prototype.delete = function(rsId) {
        this.service.remove({risk_type_Id: rsId});
    };
    RiskTypes.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    RiskTypes.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new RiskTypes;
}]);

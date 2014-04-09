app.factory('RiskStatuses', ['$resource', function($resource) {
    function RiskStatuses() {
        this.service = $resource('/api/risk_statuses/:risk_status_Id',
            {risk_status_Id: '@id'});
    };
    RiskStatuses.prototype.all = function() {
        return this.service.query();
    };
    RiskStatuses.prototype.delete = function(rsId) {
        this.service.remove({risk_status_Id: rsId});
    };
    RiskStatuses.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    RiskStatuses.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new RiskStatuses;
}]);

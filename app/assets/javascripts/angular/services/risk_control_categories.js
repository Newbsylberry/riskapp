app.factory('RiskControlCat', ['$resource', function($resource) {
    function RiskControlCat() {
        this.service = $resource('/api/risk_control_categories/:risk_control_category_Id',
            {risk_control_category_Id: '@id'});
    };
    RiskControlCat.prototype.all = function() {
        return this.service.query();
    };
    RiskControlCat.prototype.delete = function(eId) {
        this.service.remove({risk_control_category_Id: rcId});
    };
    RiskControlCat.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    RiskControlCat.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new RiskControlCat;
}]);

app.factory('RiskControlCats', ['$resource', function($resource) {
    function RiskControlCats() {
        this.service = $resource('/api/risk_control_categories/:risk_control_category_Id',
            {risk_control_category_Id: '@id'});
    };
    RiskControlCats.prototype.all = function() {
        return this.service.query();
    };
    RiskControlCats.prototype.delete = function(rcId) {
        this.service.remove({risk_control_category_Id: rcId});
    };
    RiskControlCats.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    RiskControlCats.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new RiskControlCats;
}]);

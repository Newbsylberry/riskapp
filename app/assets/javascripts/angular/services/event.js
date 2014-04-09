app.factory('Events', ['$resource', function($resource) {
    function Events() {
        this.service = $resource('/api/events/:eventId', {eventId: '@id'});
    };
    Events.prototype.all = function() {
        return this.service.query();
    };
    Events.prototype.delete = function(eId) {
        this.service.remove({eventId: eId});
    };
    Events.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Events.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Events;
}]);

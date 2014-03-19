app.factory('Event', ['$resource', function($resource) {
    function Event() {
        this.service = $resource('/api/events/:eventId', {eventId: '@id'});
    };
    Event.prototype.all = function() {
        return this.service.query();
    };
    Event.prototype.delete = function(eId) {
        this.service.remove({eventId: eId});
    };
    Event.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Event.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Event;
}]);

app.factory('Project', ['$resource', function($resource) {
    function Project() {
        this.service = $resource('/api/projects/:projectId', {projectId: '@id'});
    };
    Project.prototype.all = function() {
        return this.service.query();
    };
    Project.prototype.delete = function(pjctId) {
        this.service.remove({projectId: pjctId});
    };
    Project.prototype.get = function(id, successCallback, errorCallback) {
        this.service.get(id, successCallback, errorCallback);
    };
    Project.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Project;
}]);
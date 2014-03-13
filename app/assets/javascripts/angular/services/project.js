app.factory('Project', ['$resource', function($resource) {
    function Project() {
        this.service = $resource('/api/projects/:projectId', {projectId: '@id'});
    };
    Project.prototype.all = function() {
        return this.service.query();
    };
    Project.prototype.delete = function(pjId) {
        this.service.remove({projectId: pjId});
    };
    Project.prototype.create = function(attr) {
        return this.service.save(attr);
    }
    return new Project;
}]);
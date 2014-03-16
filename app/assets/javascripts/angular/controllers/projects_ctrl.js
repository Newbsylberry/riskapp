app.controller('ProjectsCtrl', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.all();
    $scope.createProject = function() {
        var attr = {};
        attr.name = ($scope.newProject.name);
        attr.description = ($scope.newProject.description);
        var newProject = Project.create(attr);
        $scope.projects.push(newProject);
        $scope.newProject.name = "";
        $scope.newProject.description = "";
    };

    $scope.deleteProject = function(id, idx) {
        $scope.projects.splice(idx, 1);
        return Project.delete(id);
    };
}]);
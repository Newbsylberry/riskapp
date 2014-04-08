app.controller('ProjectsCtrl', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.all();

    $scope.createProject = function() {
        var attr = {};
        attr.name = ($scope.newProject.name);
        attr.description = ($scope.newProject.description);
        attr.portfolio_id = ($scope.portfolio.id);
        var newProject = Project.create(attr);
        $scope.projects.push(newProject);
        $scope.newProject.name = "";
        $scope.newProject.description = "";
        // Within the create project function look to see if a portfolio.projects array exists
        // If it doesn't create it, if it does put the newProject
        if($scope.portfolio.projects == null) {
            $scope.portfolio.projects = [];
        }
        $scope.portfolio.projects.push(newProject);

    };

    $scope.deleteProject = function(id, idx) {
        $scope.projects.splice(idx, 1);

        // .splice removes one (1) element from the array index (idx is index)
        var projects = $scope.portfolio.projects;
        projects.splice(idx, 1);
        return Project.delete(id);
    };
}]);
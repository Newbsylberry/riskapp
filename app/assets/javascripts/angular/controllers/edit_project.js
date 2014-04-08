app.controller('EditProjectCtrl', ['$scope', '$routeParams', 'Project',
    function($scope, $routeParams, Project) {

        $scope.display = 'general_project_config'

        Project.get({projectId: $routeParams.projectId}, function(successResponse) {
            $scope.project = successResponse;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });
    }]);
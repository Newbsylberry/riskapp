app.controller('ProjectHomeCtrl', ['$scope', '$routeParams', 'Project',
    function($scope, $routeParams, Project) {
        Project.get({projectId: $routeParams.projectId}, function(successResponse) {
            $scope.project = successResponse;
            console.log("success response");
            console.log(successResponse);
        }, function(errorResponse) {
            console.log("error response");
            console.log(errorResponse);
        });


    }]);
app.controller('EventsCtrl', ['$scope', 'Events', function($scope, Events) {
    $scope.events = Events.all();

    $scope.createEvent = function() {
        var attr = {};
        attr.name = ($scope.newEvent.name);
        attr.description = ($scope.newEvent.description);
        attr.event_date = ($scope.newEvent.event_date);
        attr.portfolio_id = ($scope.portfolio.id)
        var newEvent = Events.create(attr);
        $scope.events.push(newEvent);
        $scope.newEvent.name = "";
        $scope.newEvent.description = "";
        $scope.newEvent.event_date = "";

        if($scope.portfolio.events == null) {
            $scope.portfolio.events = [];
        }
        $scope.portfolio.events.push(newEvent);
    };


    $scope.deleteEvent = function(id, idx) {
        $scope.events.splice(idx, 1);

        // .splice removes one (1) element from the array index (idx is index)
        var events = $scope.portfolio.events;
        events.splice(idx, 1);
        return Events.delete(id);
    };
}]);
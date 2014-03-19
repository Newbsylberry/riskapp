app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event) {
    $scope.events = Event.all();

    $scope.createEvent = function() {
        var attr = {};
        attr.name = ($scope.newEvent.name);
        attr.description = ($scope.newEvent.description);
        attr.event_date = ($scope.newEvent.event_date);
        var newEvent = Event.create(attr);
        $scope.events.push(newEvent);
        $scope.newEvent.name = "";
        $scope.newEvent.description = "";
        $scope.newEvent.event_date = "";
    };

    $scope.deleteEvent = function(id, idx) {
        $scope.events.splice(idx, 1);
        return Event.delete(id);
    };
}]);
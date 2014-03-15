function ScrollCtrl($scope, $location, $anchorScroll) {
    $scope.gotoBottom = function (){

        %location.hash('bottom');
        $anchorScroll();
    }};

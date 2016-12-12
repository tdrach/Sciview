app.controller('DiscussPointController', [
    '$scope',
    '$rootScope',
    '$location',
    '$state',
    '$stateParams',
    'Observations',
    function($scope, $rootScope, $location, $state, $stateParams, Observations) {
        $scope.$state = $state;        
        // $scope.observations = Observations.getObservations();
        // console.log($stateParams);
        console.log("DiscussPointController");
    }
]);

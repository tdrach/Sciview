app.controller('DiscussController', [
    '$scope',
    '$rootScope',
    '$location',
    '$state',
    '$stateParams',
    'Observations',
    function($scope, $rootScope, $location, $state, $stateParams, Observations) {
        $scope.$state = $state;        
        $scope.observations = Observations.getObservations();
        console.log($stateParams);

        $scope.new_obvs = $scope.observations[0];

    }
]);

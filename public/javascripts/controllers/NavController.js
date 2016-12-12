app.controller('NavController', [
    '$scope',
    '$rootScope',
    '$location',
    '$state',
    function($scope, $rootScope, $location, $state) {
        $scope.$state = $state;
    }
]);

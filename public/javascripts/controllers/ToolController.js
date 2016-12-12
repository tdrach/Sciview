app.controller('ToolController', [
    '$scope',
    '$rootScope',
    '$location',
    function($scope, $rootScope, $location) {
        $scope.channel = {
          title: 'oil-pressure_3a',
          category: 'thrusters',
          value: '321',
          unit: 'psi'
        };

        $scope.data_set = {
          time: '00:20:38:12',
          unit: 'seconds'
        };
    }
]);

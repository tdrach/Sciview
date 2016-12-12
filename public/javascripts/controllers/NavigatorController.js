app.controller('NavigatorController', [
    '$scope',
    '$rootScope',
    '$location',
    'Sources',
    function($scope, $rootScope, $location, Sources) {
      
        $scope.sources = Sources.getDataSources();

        $scope.navigator = {
          search_query: ""
        };

    }
]);

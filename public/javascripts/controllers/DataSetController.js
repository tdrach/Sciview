app.controller('DataSetController', [
    '$scope',
    '$rootScope',
    '$location',
    '$stateParams',
    '$state',
    'DataSets',
    'Observations',
    function($scope, $rootScope, $location, $stateParams, $state, DataSets, Observations) {

        // Get all Data Sets        
        $scope.data_sets = DataSets.getDataSets();
        // Set current Data Set
        $scope.current_data_set = $scope.data_sets[$stateParams.dataSetId];
        // Get list of data points (for over chart)    
        // $scope.data_points = Observations.getDataPoints($stateParams.dataSetId);
        // Make $state available in $scope
        $scope.$state = $state;        

        // Default state for adding new meta tag
        $scope.meta = {};

        // Expand and retract group channels
        $scope.toggleGroup = function(channel) {
            toggleExpandRetract(channel);
        };

        $scope.toggleChannel = function(channel) {
            toggleExpandRetract(channel);
        };

        // $scope.addNewMeta = function(channel) {
        //     // $scope.meta_add = "";
        // };

        $scope.saveMetaChannel = function(channel, content) {
            channel.meta.push(content);
        }

        // Function to change state of expanded or retracted object
        var toggleExpandRetract = function(obj) {
            if(obj.state === "retracted") 
                obj.state = "expanded";
            else 
                obj.state = "retracted";
        };
    }

]);
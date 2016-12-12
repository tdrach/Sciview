app.controller('UploadController', [
    '$scope',
    '$rootScope',
    '$location',
    '$timeout',
    function($scope, $rootScope, $location, $timeout) {
      
      $scope.uploads = [];
      var index = 0;

      var upload_items = [
        {
          name: "LAUNCH_FILE_3s",
          status: {
            upload: false
          }
        },        
        {
          name: "TEST_LAUNCH",
          status: {
            upload: false
          }
        },        
        {
          name: "TEST_3",
          status: {
            upload: false
          }
        }
      ];


      $scope.choseFile = function() {
        $scope.uploads.push(upload_items[index]);
        index++;
      };

      $scope.uploadItem = function(item) {
        item.status.upload = true;
      };

      $scope.stopUpload = function(item) {
        $scope.uploads.splice(item, 1);
      }

    }
]);

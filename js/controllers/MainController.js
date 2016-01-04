'use strict';

angular.module('app').controller('MainController', function ($scope) {
        $scope.languages = ['English', 'French', 'Spanish'];
        $scope.enabled = false;
        $scope.buttonText = 'Turn On';
        $scope.toggle = function() {
                if ($scope.enabled == true) {
                        $scope.enabled = false;
                }
                else {
                        $scope.enabled = true;
                }

                if ($scope.enabled == false) {
                        $scope.buttonText = 'Turn On';
                }
                else {
                        $scope.buttonText = 'Turn Off';
                }
        }
});
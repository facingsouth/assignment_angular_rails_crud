var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

var pbApp = angular.module("pbApp", ['ui.router', 'restangular', 'underscore'])

pbApp.controller("testCtrl", ['$scope', function($scope) {
                      $scope.hw = "Dynamic now!";
                   }])
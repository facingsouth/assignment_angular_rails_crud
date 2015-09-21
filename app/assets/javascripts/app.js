var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

var pbApp = angular.module("pbApp", ['ui.router', 'restangular', 'underscore'])


pbApp.config(["RestangularProvider", function(RestangularProvider) {
  RestangularProvider.setBaseUrl("/api/v1");
  RestangularProvider.setRequestSuffix(".json");
}])

pbApp.config(["$stateProvider", "$urlRouterProvider", 
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('');

    $stateProvider
      .state('pins', {
        url: '',
        templateUrl: 'templates/pinsLayout.html'
      })
      .state('pins.index', {
        url: '/pins',
        templateUrl: 'templates/pinsIndex.html',
        controller: 'pinsCtrl'
      })
}])

pbApp.controller("testCtrl", ['$scope', function($scope) {
                      $scope.hw = "Dynamic now!";
                   }])
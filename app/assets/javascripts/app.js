// var underscore = angular.module('underscore', []);
// underscore.factory('_', ['$window', function($window) {
//   return $window._; // assumes underscore has already been loaded on the page
// }]);

var pbApp = angular.module("pbApp", ['ui.router', 'restangular', 'Devise'])


pbApp.config(["RestangularProvider", function(RestangularProvider) {
  RestangularProvider.setBaseUrl("/api/v1");
  RestangularProvider.setRequestSuffix(".json");
}])

pbApp.config(function(AuthProvider) {
  AuthProvider.logoutPath('api/v1/users/sign_out.json');
  AuthProvider.registerPath('api/v1/users.json');
  // AuthProvider.registerMethod('POST');
  // AuthProvider.resourceName('user');
});

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
      .state('pins.show', {
        url: '/pins/:id',
        templateUrl: 'templates/pinShow.html',
        controller: 'pinShowCtrl'
      })
      .state('sign-up', {
        url: 'sign-up',
        templateUrl: 'templates/registrations.html',
        controller: 'usersCtrl'
      })
}])

pbApp.controller("testCtrl", ['$scope', function($scope) {
                      $scope.hw = "Dynamic now!";
                   }])
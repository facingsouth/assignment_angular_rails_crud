pbApp.controller("pinsCtrl", ["$scope", "Restangular",
  function($scope, Restangular){
    $scope.pins = Restangular.all("pins").getList().$object;
}])
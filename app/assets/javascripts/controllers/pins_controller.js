pbApp.controller("pinsCtrl", ["$scope", "Restangular",
  function($scope, Restangular){
    $scope.pinForm = {};
    $scope.pins = Restangular.all("pins").getList().$object;


    $scope.createNewPin = function() {
      Restangular.all('pins').post({
        pin: {
          item_name: $scope.pinForm.title, 
          buy_sell: $scope.pinForm.buySell === "true",
          description: $scope.pinForm.description,
          user_id: 1
        }
      })
      .then(
        function(data){
          $scope.pins.push(data);
        }
      );
    }
}])


pbApp.controller("pinShowCtrl", ["$scope", "Restangular", "$stateParams", 
  function($scope, Restangular, $stateParams){
    $scope.pin = Restangular.one("pins", $stateParams.id).get().$object;
}])
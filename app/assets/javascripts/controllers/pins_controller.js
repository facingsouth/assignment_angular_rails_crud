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

    $scope.deletePin = function(id) {
      Restangular.one("pins", id).get().then(function(pin){
        pin.remove().then(function(){
          var index = $scope.pins.indexOf(pin);
          $scope.pins.splice(index, 1);
        })
      });
    }
}])


pbApp.controller("pinShowCtrl", ["$scope", "Restangular", "$stateParams", 
  function($scope, Restangular, $stateParams){
    $scope.pinForm = {};
    Restangular.one("pins", $stateParams.id).get().then(function(pin){
      $scope.pin = pin;
      $scope.pinForm.title = pin.item_name; 
      $scope.pinForm.buySell = pin.buy_sell ? "true" : "false";
      $scope.pinForm.description = pin.description;
    });

    $scope.updatePin = function() {
      $scope.pin.item_name = $scope.pinForm.title; 
      $scope.pin.buy_sell = $scope.pinForm.buySell === "true";
      $scope.pin.description = $scope.pinForm.description;
      $scope.pin.put();
    }
}])




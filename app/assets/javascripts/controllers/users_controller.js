pbApp.controller("usersCtrl", ["$scope", "Restangular", "Auth",
  function($scope, Restangular, Auth){
    $scope.userForm = {};

    // $scope.signUp = function() {
    //   Restangular.all('users').post({
    //     user: {
    //       username: $scope.userForm.username, 
    //       email: $scope.userForm.email,
    //       password: $scope.userForm.password,
    //       password_confirmation: $scope.userForm.passwordConfirmation
    //     }
    //   })
    //   .then(
    //     function(data){
    //       $scope.userForm = {};
    //       console.log(data);
    //       $scope.currentUser = data;
    //     }
    //   );
    // }


    $scope.signUp = function() {
      var credentials = {
          email: $scope.userForm.email,
          password: $scope.userForm.password,
          password_confirmation: $scope.userForm.passwordConfirmation
      };
      var config = {
          headers: {
              'X-HTTP-Method-Override': 'POST'
          }
      };
      // console.log(credentials);
      Auth.register(credentials, config).then(function(registeredUser) {
          console.log("user", registeredUser); // => {id: 1, ect: '...'}
          $scope.userForm = {};
      }, function(error) {
          console.log(error);
          // Registration failed...
      });
    } 

    $scope.$on('devise:new-registration', function(event, user) {
        $scope.currentUser = user;
    });

    $scope.signOut = function() {
      var config = {
          headers: {
              'X-HTTP-Method-Override': 'DELETE'
          }
      };
      Auth.logout(config).then(function(oldUser) {
          console.log("olduser", oldUser); // => {id: 1, ect: '...'}
      }, function(error) {
          console.log(error);
          // Registration failed...
      });
    } 

    $scope.$on('devise:logout', function(event, oldUser) {
        $scope.currentUser = null;
        console.log('watch', oldUser);
    });

}])
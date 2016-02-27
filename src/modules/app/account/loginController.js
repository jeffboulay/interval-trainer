'use strict';

module.exports = /*@ngInject*/
  function loginController($scope, $http, identityFactory,  authFactory, $location) {
    $scope.identity = identityFactory;
    $scope.signin = function(username, password) {
      authFactory.authenticateUser(username, password).then(function(success) {
        if(success) {
          //notifierFactory.notify('You have successfully signed in!');
        } else {
         // notifierFactory.notify('Username/Password combination incorrect');
        }
      });
    };

    $scope.signout = function() {
      authFactory.logoutUser().then(function() {
        $scope.username = "";
        $scope.password = "";
        //notifierFactory.notify('You have successfully signed out!');
        $location.path('/');
      });
    };
  };

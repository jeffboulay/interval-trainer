'use strict';

module.exports = /*@ngInject*/
  function authFactory($http, identityFactory, $q, userFactory) {
    return {
      authenticateUser: function(username, password) {
        var dfd = $q.defer();
        $http.post('/login', {username:username, password:password}).then(function(response) {
          if(response.data.success) {
            var user = new userFactory();
            angular.extend(user, response.data.user);
            identityFactory.currentUser = user;
            dfd.resolve(true);
          } else {
            dfd.resolve(false);
          }
        });
        return dfd.promise;
      },
      logoutUser: function() {
        var dfd = $q.defer();
        $http.post('/logout', {logout:true}).then(function() {
          identityFactory.currentUser = undefined;
          dfd.resolve();
        });
        return dfd.promise;
      },
      authorizeCurrentUserForRoute: function(role) {
        if(identityFactory.isAuthorized(role)) {
          return true;
        } else {
          return $q.reject('not authorized');
        }

      }
    };
  };

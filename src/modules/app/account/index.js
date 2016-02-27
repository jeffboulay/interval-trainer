'use strict';

module.exports =
  angular.module('interval trainer.account', [
      //load your base submodules here, e.g.:
      //require('./bar').name
    ])
    .config(function ($stateProvider) {
      $stateProvider
        .state('account', {
          url: '/',
          templateUrl: 'app/account/login.html',
          controller: 'loginController'
        });
    })
    .controller('loginController', require('./loginController'))
    .factory('authFactory',require('./authFactory'))
    .factory('identityFactory',require('./identityFactory'))
    .factory('userFactory',require('./userFactory'));


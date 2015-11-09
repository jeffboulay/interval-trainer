'use strict';

module.exports =
  angular.module('interval trainer.session', [
    //load your base submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('session', {
      url: '/session',
      templateUrl: 'app/session/layout.html',
      controller: 'sessionController'
    });
  })
  .controller('sessionController', require('./sessionController'));

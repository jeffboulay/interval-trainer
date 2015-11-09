'use strict';

module.exports =
  angular.module('interval trainer.sessions', [
    //load your base submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('sessions', {
      url: '',
      templateUrl: 'app/sessions/sessions.html',
      controller: 'sessionsController'
    });
  })
  .controller('sessionsController', require('./sessionsController'));

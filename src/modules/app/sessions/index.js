'use strict';

module.exports =
  angular.module('interval trainer.sessions', [
    //load your base submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('sessions', {
      url: '/',
      templateUrl: 'app/sessions/sessions.html',
      controller: 'sessionsController'
    })
      .state('add-session', {
        url: '/add-session',
        templateUrl: 'app/sessions/add-session.html',
        controller: 'addSessionController'
      });
  })
  .controller('sessionsController', require('./sessionsController'))
    .controller('addSessionController', require('./addSessionController'))
  .factory('sessionsFactory',require('./sessions-factory'));

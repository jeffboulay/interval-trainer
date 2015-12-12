'use strict';

module.exports = /*@ngInject*/
  function sessionsController($scope, sessionsFactory) {
    $scope.sessions = sessionsFactory.getSessions;
  };

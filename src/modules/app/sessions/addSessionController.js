'use strict';

module.exports = /*@ngInject*/
  function addSessionsController($scope, sessionsFactory) {
    $scope.intervals=[];
    $scope.newInterval={};
    function clearInterval(){
      $scope.newInterval=[];
    }

    $scope.addInterval = function() {
      $scope.intervals.push($scope.newInterval);
      clearInterval();
    }
  };

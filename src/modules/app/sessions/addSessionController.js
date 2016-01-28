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
    };
    $scope.createSession = function () {
      sessionsFactory.createSession(
        {
          "name": "Strength force upper",
          "intervalCount": 13,
          "totalTime": 30,
          "activities": [
            {
              "name": "arms",
              "timer": 10000,
              "rest": 8000
            },
            {
              "name": "legs",
              "timer": 20000,
              "rest": 8000
            },
            {
              "name": "chest",
              "timer": 12000,
              "rest": 8000
            }
          ]
        }
      );
    };
  };

'use strict';

module.exports = /*@ngInject*/
  function addSessionsController($scope, sessionsFactory) {
    $scope.session ={
      "name": "",
      "activityCount": 0,
      "totalTime": 0,
      "activities": []
    };
    $scope.newActivity={};
    function clearActivity(){
      $scope.newActivity=[];
    }

    $scope.addActivity = function() {

      $scope.session.activityCount++;
      $scope.session.totalTime = $scope.session.totalTime + $scope.newActivity.timer + $scope.newActivity.rest;
      $scope.session.activities.push($scope.newActivity);
      console.log($scope.session);
      clearActivity();
    };
    $scope.createSession = function () {
      sessionsFactory.createSession($scope.session);
    };
  };

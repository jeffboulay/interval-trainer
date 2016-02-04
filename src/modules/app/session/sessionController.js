'use strict';

module.exports = /*@ngInject*/
  function sessionController($scope,$timeout,$stateParams,sessionFactory) {
    console.log('stateParam', $stateParams.id);
    var currentInterval = 0;
    var currentTime;
    var session;

    sessionFactory.getSession($stateParams.id).then(function(res){
      session = res.data;
      $scope.sessionList = angular.copy(session.activities);
      $scope.currentInterval = session.activities[currentInterval];
      nextInterval();
    });
    var rest = false;
   function nextInterval(){
      //console.log("interval",currentInterval+1,session.length);
      if(currentInterval >= session.activities.length){
        console.log("done");
        $scope.currentInterval  = {
          activity:"",
          timer:"Done"
        };
      } else{
        if(rest) {
          var restTime =getTime(session.activities[currentInterval].rest);
          setInterval(session.activities[currentInterval].rest);
          $scope.currentInterval  = {
            activity:"rest",
            timer:restTime.timeString
          };
          currentInterval++;
          rest = false;

        } else {
          var timerTime =getTime(session.activities[currentInterval].timer);
          rest = true;
          setInterval(session.activities[currentInterval].timer);
          $scope.currentInterval  = {
            activity:session.activities[currentInterval].activity,
            timer:timerTime.timeString
          };
          $scope.sessionList.shift();
          console.log(session.activities);
        }
      }
    }

    function getTime(time){
      var myTime = {};
      var totalTime = time;
      var hour = 3600000;
      var minute = 60000;
      var second = 1000;

      myTime.hours = Math.floor(time/hour);
      totalTime = time - (myTime.hours*hour);
      myTime.minutes = Math.floor(totalTime/minute);
      totalTime = totalTime - (myTime.minutes*minute);
      myTime.seconds = Math.floor(totalTime/second);
      myTime.timeString = myTime.hours + ":" + myTime.minutes + ":" + myTime.seconds;
      return myTime;
    }

    function setInterval(time){
      currentTime = getTime(time);

      function countDown(){
        var countTime = 1000;
        $scope.currentInterval.timer = currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds;
        if(currentTime.seconds > 0){
          currentTime.seconds--;
        } else if(currentTime.minutes > 0){
          currentTime.minutes--;
          currentTime.seconds = 59;
        } else if(currentTime.hours > 0){
          currentTime.hours--;
          currentTime.minutes = 0;
        } else {
          return nextInterval();
        }
        $timeout(function(){
          return countDown();
        },countTime);

      }
    return countDown();
    }

    $scope.welcome = 'interval';
  };

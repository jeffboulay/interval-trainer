'use strict';

module.exports = /*@ngInject*/
  function sessionController($scope,$timeout,sessionFactory) {

    var currentInterval = 0;
    var currentTime;
    var session = sessionFactory.getSession;
    var rest = false;

    $scope.session = session;
    $scope.currentInterval = $scope.session[currentInterval];

    function nextInterval(){
      //console.log("interval",currentInterval+1,session.length);
      if(currentInterval+1 >= session.length){
        //console.log("done");
      } else{
        if(rest) {
          setInterval(session[currentInterval].rest);
          $scope.currentInterval  = {
            activity:"rest",
            timer:session[currentInterval].rest
          };
          currentInterval++;
          rest = false;

        } else {
          rest = true;
          setInterval(session[currentInterval].timer);
          $scope.currentInterval  = {
            activity:session[currentInterval].activity,
            timer:session[currentInterval].timer
          };
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
      return myTime;
    }

    function setInterval(time){
      currentTime = getTime(time);

      function countDown(){
        var countTime = 1000;
        if(currentTime.seconds > 0){
          currentTime.seconds--;
          console.log(currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds);
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
        $scope.currentInterval.timer = currentTime.hours + ":" + currentTime.minutes + ":" + currentTime.seconds;
      }
    return countDown();
    }
    nextInterval();
    $scope.welcome = 'interval';
  };

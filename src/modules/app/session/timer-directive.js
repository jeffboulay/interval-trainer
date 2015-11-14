'use strict';

module.exports = /*@ngInject*/
  function timer(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      restrict: 'EA',
      template: require('./timer.html'),
      link:function (scope){
        scope.interval = {
          activity:'Jumping Jacks',
          time:'2:30'
        };
        // Do something awesome
      }
    };
  };

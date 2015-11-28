'use strict';

module.exports = /*@ngInject*/
  function interval(/* inject dependencies here, i.e. : $rootScope */) {
    return {
      scope: {
        interval:'=data'
      },
      restrict: 'EA',
      template: require('./interval.html'),
      link:function (scope){
        // Do something awesome
      }
    };
  };

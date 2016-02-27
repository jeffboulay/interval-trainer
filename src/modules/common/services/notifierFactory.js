'use strict';
module.exports = /*@ngInject*/
  function notifierFactory(toastr) {
    return {
      notify: function(msg) {
        toastr.success(msg);
        console.log(msg);
      }
    };
  };

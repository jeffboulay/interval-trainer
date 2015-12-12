'use strict';

module.exports = /*@ngInject*/
  function sessionsFactory(/* inject dependencies here, i.e. : $rootScope */) {

    var session = require('../../../mock-data/sessions.json');
    function getSessions(id){

    }
    return {
      getSessions:session
    };
  };

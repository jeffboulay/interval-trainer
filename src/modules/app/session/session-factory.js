'use strict';

module.exports = /*@ngInject*/
  function sessionFactory(/* inject dependencies here, i.e. : $rootScope */) {

    var session = require('../../../mock-data/session.json');

    function getSession(id){

    }
    return {
      getSession:session
    };
  };

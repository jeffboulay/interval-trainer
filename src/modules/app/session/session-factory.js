'use strict';

module.exports = /*@ngInject*/
  function sessionFactory($http) {

    var session = require('../../../mock-data/session.json');

    function getSession(id){
      return $http.get('http://localhost:3000/sessions/' + id).then(function (session) {
        return session;
      });
    }
    return {
      getSession:getSession
    };
  };

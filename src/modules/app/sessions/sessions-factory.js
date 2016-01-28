'use strict';

module.exports = /*@ngInject*/
  function sessionsFactory($http) {

    var session = require('../../../mock-data/sessions.json');
    function getSessions(id){

    }
    function createSession(newSession){
        $http.post('http://localhost:3000/session',newSession).success(function (data) {
          console.log('success',data);
        });
    }
    return {
      getSessions:session,
      createSession:createSession
    };
  };

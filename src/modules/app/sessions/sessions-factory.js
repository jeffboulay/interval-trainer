'use strict';

module.exports = /*@ngInject*/
  function sessionsFactory($http) {

    var session = require('../../../mock-data/sessions.json');
    function getSessions(){
      return $http.get('http://localhost:3000/sessions').then(function (res) {
        return res.data;
      });
    }
    function createSession(newSession){
        $http.post('http://localhost:3000/session',newSession).success(function (data) {
          console.log('success',data);
        });
    }
    return {
      getSessions:getSessions,
      createSession:createSession
    };
  };

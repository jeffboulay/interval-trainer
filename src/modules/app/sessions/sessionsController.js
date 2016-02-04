'use strict';

module.exports = /*@ngInject*/
  function sessionsController($scope, sessionsFactory) {
    $scope.sessions = [];
    sessionsFactory.getSessions().then(function (res) {
       $scope.sessions =  res.data;
    });

    $scope.deleteSession = function (idx) {
      var session_to_delete = $scope.sessions[idx];
      $scope.sessions.splice( $scope.sessions.indexOf(session_to_delete), 1 );
      sessionsFactory.deleteSession({ id: session_to_delete._id}, function (success) {
        $scope.sessions.splice( $scope.sessions.indexOf(session_to_delete), 1 );
      });
    };

    /*$scope.delete = function ( idx ) {
      var person_to_delete = $scope.persons[idx];
      API.DeletePerson({ id: person_to_delete.id }, function (success) {
        $scope.persons.splice(idx, 1);
      });
    };*/
  };

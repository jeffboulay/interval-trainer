'use strict';

module.exports = /*@ngInject*/
  function userFactory($resource) {
    //console.log($resource);
    var UserResource = $resource('http://localhost:3000/api/users/:id', {_id: "@id"});

    UserResource.prototype.isAdmin = function() {
      return this.roles && this.roles.indexOf('admin') > -1;
    };

    return UserResource;
  };

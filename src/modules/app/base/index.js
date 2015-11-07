'use strict';

module.exports =
  angular.module('interval trainer.foo', [
    //load your base submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('base', {
      url: '',
      templateUrl: 'app/base/layout.html',
      controller: 'baseController'
    });
  })
  .controller('baseController', require('./baseController'));

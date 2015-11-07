'use strict';

module.exports =
  angular.module('interval trainer.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);

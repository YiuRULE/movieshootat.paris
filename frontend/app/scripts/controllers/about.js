'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('AboutCtrl', ['$scope', function ($scope) {
    $scope = $scope;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

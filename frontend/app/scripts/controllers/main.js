'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('http://localhost:4242/movies?query={movie {  title shoots {lat long }}}', {})
    .then(function(res) {
      $scope.movies = res.data.data.movie;
    });
    angular.extend($scope, {
      center: {
        lat: 48.8534100,
        lng: 2.3488000,
        zoom: 1
      },
      layers: {
        baselayers: {
            mapbox_light: {
                name: 'Mapbox Light',
                url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=token_api',
                type: 'xyz',
                layerOptions: {
                    apikey: 'token_api',
                    mapid: 'streets-v10'
                }
            },
            osm: {
                name: 'OpenStreetMap',
                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                type: 'xyz'
            }
        }
      }
    });
  }]);

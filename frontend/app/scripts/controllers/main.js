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
                type: 'xyz',
                layerOptions: {
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

    $http.get('http://localhost:4242/movies?query={movie{ poster original_title title shoots {lat long } senscritique { story}}}', {})
    .then(function(res) {
      let marker = {};
      let x = 0;
      for (let i = 0; i != res.data.data.movie.length; ++i) {
        if (res.data.data.movie[i].senscritique.length !== 0 && res.data.data.movie[i].senscritique[0].story !== null) {
          res.data.data.movie[i].senscritique[0].story = res.data.data.movie[i].senscritique[0].story.substring(0, 100) + "...";
        } else {
          res.data.data.movie[i].senscritique = [{story: 'Aucune description'}];
        }
        const name = res.data.data.movie[i].title;
        res.data.data.movie[i].shoots.forEach((currentShoot) => {
          if (currentShoot.lat !== null) {
            marker['m'+x++] = {
              lat: currentShoot.lat,
              lng: currentShoot.long,
              message: name
            }
          }
        });
      }
      console.log(marker);
      angular.extend($scope, {
        markers: marker
      });
      $scope.movies = res.data.data.movie;
    });
  }]);

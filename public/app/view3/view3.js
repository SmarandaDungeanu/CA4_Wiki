'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'CategoryController'
  })
      .when('/view3/:category', {
        templateUrl: 'app/view3/view3.html',
        controller: 'TtitlesController'
      })
}])

.controller('TitlesController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
  $http({
    method: 'GET',
    url: 'api/categories/'+$location.path().split('/')[2]
  }).
      success(function (data, status, headers, config) {
        $scope.titles = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });
}]);




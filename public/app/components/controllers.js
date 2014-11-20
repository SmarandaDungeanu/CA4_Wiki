angular.module('myAppRename.controllers', []).
    controller('AppCtrl', function ($scope) {
    $scope.title = "WikiView";
  })
    .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http, Wikis) {
    $scope.setWiki = function(searchString) {
        $http({
          method: 'GET',
          url: 'api/search/' + searchString
        }).
            success(function (data, status, headers, config) {
              $scope.wikis = data;
            }).
            error(function (data, status, headers, config) {
              $scope.error = data;
            });
    }
}])
    .controller('detailsController', ['$scope','$http', '$location',function ($scope,$http,$location) {
      $http({
        method: 'GET',
        url: 'api/title/'+$location.path().split("/")[2]
      }).
          success(function (data, status, headers, config) {
            console.log(data);
            $scope.wiki = data;
          }).
          error(function (data, status, headers, config) {
            $scope.error = data;
          });
    }])
    .controller('CategoryController', ['$scope', '$http', function ($scope, $http) {

           $http({
               method: 'GET',
               url: 'api/categories'
           }).
               success(function (data, status, headers, config) {
                   $scope.categories = data;
                   //$scope.totalItems = Categories.getNumberOfCategories();
                   //$scope.currentPage = 1;
                   //$scope.setPage = function (pageNo) {
                   //    $scope.currentPage = pageNo;
                   //};
                   //$scope.maxSize = 8;
               }).
               error(function (data, status, headers, config) {
                   $scope.error = data;
               });


    }]);




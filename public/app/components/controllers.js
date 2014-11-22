angular.module('myAppRename.controllers', ['ui.bootstrap']).
    controller('AppCtrl', function ($scope) {
        $scope.title = "WikiView";
    })
    .controller('View2Ctrl', ['$scope', '$http', function ($scope, $http, Wikis) {
        $scope.showNow = false;
        $scope.setWiki = function (searchString) {
            $http({
                method: 'GET',
                url: 'api/search/' + searchString
            }).
                success(function (data, status, headers, config) {
                    $scope.wikis = data;
                    $scope.showNow = true;
                    $scope.itemsPerPage = 15;
                    $scope.currentPage = 1;
                    $scope.maxSize = 8;

                    $scope.pageCount = function () {
                        return Math.ceil($scope.wikis.length / $scope.itemsPerPage);
                    };

                    $scope.$watch('currentPage + itemsPerPage', function () {
                        $scope.totalItems = $scope.wikis.length;
                        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                            end = begin + $scope.itemsPerPage;
                        $scope.filteredWikis = $scope.wikis.slice(begin, end);
                    });
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });
        }
    }])
    .controller('detailsController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $http({
            method: 'GET',
            url: 'api/title/' + $location.path().split("/")[2]
        }).
            success(function (data, status, headers, config) {
                $scope.wiki = data;
            }).
            error(function (data, status, headers, config) {
                $scope.error = data;
            });
    }])
    .controller('CatController', function ($scope, $http) {
        $scope.alphabet = 'ALL,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(",");
        var categories = [];
        $http({
            method: 'GET',
            url: 'api/categories'
        }).
            success(function (data, status, headers, config) {

                categories = data;
                categories.splice(0, 1);
                $scope.categories = data;
                $scope.categories.splice(0, 1);
                $scope.itemsPerPage = 15;
                $scope.currentPage = 1;
                $scope.maxSize = 8;


                $scope.pageCount = function () {
                    return Math.ceil($scope.categories.length / $scope.itemsPerPage);
                };

                $scope.$watch('currentPage + itemsPerPage', function () {
                    $scope.totalItems = $scope.categories.length;
                    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                        end = begin + $scope.itemsPerPage;
                    $scope.filteredCategories = $scope.categories.slice(begin, end);
                });


                $scope.showCategoriesWithLetter = function (letter) {
                    var cat = [];
                    if (letter == 'ALL') {
                        $scope.categories = categories;
                    }
                    else {
                        for (var i = 0; i < categories.length; i++) {
                            if (categories[i].indexOf(letter) == 0) {
                                cat.push(categories[i]);
                            }
                        }
                        $scope.categories = cat;
                    }
                    $scope.$watch('currentPage + itemsPerPage', function () {
                        $scope.totalItems = $scope.categories.length;
                        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                            end = begin + $scope.itemsPerPage;
                        $scope.filteredCategories = $scope.categories.slice(begin, end);
                    });
                };

                $scope.getTitlesForCategory = function (category) {
                    $http({
                        method: 'GET',
                        url: 'api/categories/' + category
                    }).
                        success(function (data, status, headers, config) {
                            $scope.titles = data;
                            console.log(data);
                        }).
                        error(function (data, status, headers, config) {
                            $scope.titles = data;
                        });

                };

            })
            .error(function (data, status, headers, config) {
                $scope.error = data;

            });
    });




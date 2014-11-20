'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/view2', {
                templateUrl: 'app/view2/view2.html',
                controller: 'View2Ctrl'
            })
            .when('/view2/:title', {
                templateUrl: 'app/view2/details.html',
                controller: 'detailsController'
            })
            .otherwise({
                redirectTo: "/view2"
            })
    }])


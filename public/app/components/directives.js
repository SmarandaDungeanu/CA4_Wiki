'use strict';

/* Directives */

angular.module('myAppRename.directives', []).
    directive('angularLinks', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<ul style="list-style-type: none">' +
            '<li><a href="http://www.sitepoint.com/practical-guide-angularjs-directives/">A practical Guide</a></li>' +
            '<li><a href="http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals">Creating Custom Directives</a></li>' +
            '</ul>'
        };
    })
    .directive('detailTable1', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '</div><table class="table"><tr><th>Title</th><td><a href="http://en.wikipedia.org/wiki/{{wiki[0].title}}">{{wiki[0].title}}</a></td></tr>' +
            '<tr><th>URL</th><td>{{wiki[0].url}}</td></tr>' +
            '<tr><th>Abstract</th><td>{{wiki[0].abstract}}</td></tr>' +
            '<tr><th>Categories</th><td>' +
            '<ul ng-repeat="category in wiki[0].categories">' +
            '<li>{{category}}</a></li>' +
            '</ul>' +
            '</td>' +
            '</tr>' +
            '<tr><th>Links</th><td><ul ng-repeat="link in wiki[0].links">' +
            '<li><a href="{{link}}">{{link}}</a></li>' +
            '</ul>' +
            '</td>' +
            '</tr>' +
            '</table>'
        }
    })
    .directive('detailTable2', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<table class="table">' +
            '<th>Headings</th><td>' +
            '<ul ng-repeat="heading in wiki[0].headings">' +
            '<li>{{heading.heading}}, position {{heading.position}}</li>' +
            '</ul>' +
            '</td>' +
            '</tr>' +
            '</div>'
        }
    })
    .directive('wikiList', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: '<ul>' +
            '<input type="search" ng-model="wikiSearch" placeholder="Title">' +
            '<button class="btn btn-primary" ng-click="setWiki(wikiSearch)" >Search</button>' +
            '<ul ng-repeat="wiki in filteredWikis">' +
            '<li id="{{wiki.title}}" ng-mouseover="show=true" ng-mouseleave="show=false"><a href="#/view2/{{wiki.title}}">{{wiki.title}}</a></li>' +
            '<ul>' +
            '<li ng-show="show">{{wiki.abstract}}</li>' +
            '</ul>' +
            '</ul>' +
            '</ul>'
        }
    })
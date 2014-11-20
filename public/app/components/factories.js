'use strict';

/* Factories */

angular.module('myAppRename.factories', []).
    factory('InfoFactory', function () {
      var info = "Hello World from a Factory";
      var getInfo = function getInfo(){
        return info;
      }
      return {
        getInfo: getInfo
      }
    })

    .factory('Wikis', function () {
      var info;
      var getInfo = function getInfo() {
        return info;
      }
      var setInfo = function(newWiki) {
        info = newWiki;
      }
      return {
        setInfo: setInfo,
        getInfo: getInfo
      }
    });
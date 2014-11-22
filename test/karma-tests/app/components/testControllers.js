'use strict';
describe('myAppRename.controllers', function () {


    var ctrl, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        // Create a new scope that's a child of the $rootScope
        scope = $rootScope.$new();
        // Create the controller
        ctrl = $controller('CatController', {
            $scope: scope
        });
    }));

    it('should create the titles in the controller',
        function () {
            expect(scope.titles).toBeUndefined();

        });


});



describe('myAppRename.view2 Titles', function() {

  describe('View2Ctrl', function() {
    var $scope;

    beforeEach(module('myAppRename.view2'));


  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });

    //Mocks for the test
  //  beforeEach(module({
  //    InfoFactory: {
  //      getInfo: function() {return  "Factory"; }
  //    },
  //    InfoService: {
  //      getInfo: function() {return  "Service"; }
  //    }
  //  }));
  //
  //  beforeEach(inject(function($rootScope, $controller) {
  //    $scope = $rootScope.$new();
  //    $controller('View2Ctrl', {$scope: $scope});
  //  }));
  //
  //  it('Should have the value Factory', function () {
  //    expect($scope.infoFactory).toBe('Factory');
  //  });
  //
  //  it('Should have the value Service', function () {
  //    expect($scope.infoService).toBe('Service');
  //  });
  });
});
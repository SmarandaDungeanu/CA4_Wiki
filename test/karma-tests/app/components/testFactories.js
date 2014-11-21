describe('myAppRename.factories', function () {

  beforeEach(module('myAppRename.factories'));

  describe('Wikis', function () {
    var wikiFactory;
    beforeEach(inject(function (Wikis) {
      wikiFactory = Wikis;
    }));

    it('Should be undefined for the factory', function () {
      expect(wikiFactory.getInfo()).toBeUndefined();

    });
  });


  describe('XXXFactory', function () {

  });
});
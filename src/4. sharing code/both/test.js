if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['chai', './logic'], function(chai, Logic) {

  chai.should();

  describe('logic', function() {
    var logic;

    beforeEach(function() {
      logic = new Logic();
    });

    describe('#time', function() {
      it('returns non-null', function() {
        var result = logic.time();
        console.log('time: ' + result);
        (!!result).should.equal(true);
      });
    });

  });
});

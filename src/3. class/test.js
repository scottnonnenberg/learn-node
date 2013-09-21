
var Routes = require('./routes');
var sinon = require('sinon');
var chai = require('chai');
chai.should();

describe('routes', function() {
  var routes;

  beforeEach(function() {
    routes = new Routes({
      moment: {}
    });
  });

  describe('#root', function() {
    var res, returned;

    beforeEach(function() {
      res = {
        send: sinon.stub()
      };
      returned = {};
      routes.moment = sinon.stub().returns(returned);
    });

    it('runs successfully', function() {
      returned.format = sinon.stub().returns('something');

      routes.root(null, res);

      res.send.callCount.should.equal(1, 'res.send should be called');
      routes.moment.callCount.should.equal(1, 'routes.moment should be called');
      returned.format.callCount.should.equal(1, 'returned.format should be called');
    });

    it('handles a null return', function() {
      returned.format = sinon.stub().returns(null);

      routes.root(null, res);

      res.send.callCount.should.equal(1, 'res.send should be called');
      routes.moment.callCount.should.equal(1, 'routes.moment should be called');
      returned.format.callCount.should.equal(1, 'returned.format should be called');
    })
  })
});

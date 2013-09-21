
var routes = require('./routes');
var sinon = require('sinon');

var chai = require('chai');
chai.should();

describe('routes', function() {
  it('root', function() {
    var res = {
      send: sinon.stub()
    };

    routes.root(null, res);

    res.send.callCount.should.equal(1, 'res.send should be called');
  })
});

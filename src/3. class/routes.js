
var _ = require('lodash');
var moment = require('moment');

function Routes(options) {
  _.bindAll(this);

  this.moment = moment;

  if (options && options.moment) {
    this.moment = options.moment;
  }
}

Routes.prototype.root = function(req, res) {
  var time = this.moment().format('MMMM Do YYYY, h:mm:ss a');
  if (time) {
    console.log('time: ' + time);
    res.send({time: time});
  }
  else {
    console.log('error!');
    res.send({error:'There was a problem'});
  }
};

module.exports = Routes;

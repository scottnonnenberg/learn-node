if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['moment'], function(moment) {
  'use strict';

  function Logic(options) {
    this.moment = moment;

    if (options && options.moment) {
      this.moment = options.moment;
    }
  }

  Logic.prototype.time = function() {
    return this.moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  return Logic;
});

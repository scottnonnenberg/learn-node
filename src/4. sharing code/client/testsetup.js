'use strict';

requirejs.config({
  baseUrl: '/'
  , paths: {
    jquery: 'client/lib/jquery'
    , moment: 'client/lib/moment'

    , mocha: 'client/lib/mocha'
    , chai: 'client/lib/chai'
  }
  , shim: {
    mocha: { exports: 'global.mocha' }
  }
});

var mochaCss = 'client/lib/mocha.css';

define(['jquery', 'mocha', 'chai'], function($, mocha, chai) {
  'use strict';

  mocha.setup('bdd');

  if (typeof window.tests === 'undefined') {
    throw new Error('Tests are specified via the window.tests array');
  }

  require(window.tests, function() {
    window.runTests = function() {
      if ($('#mocha').length === 0) {
        $('body').append('<div id="mocha"/>');
        $('head').append('<link rel="stylesheet" href="' + window.mochaCss + '">');
      }
      mocha.run();
      return true;
    };
  });

});

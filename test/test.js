/* jshint evil: true, expr: true */

var loader, cached, obj = {};
var expect = require('chai').expect;

before(function () {
  loader = require('../index');
});

describe('ractive-loader', function () {
  obj.cacheable = function () {
    cached = true;
  };

  beforeEach(function () {
    cached = false;
  });

  it('loads properly', function () {
    /* pass */
  });

  it('sets the cacheable flag', function () {
    loader.apply(obj, ['hi']);
    expect(cached).to.be.true;
  });

  describe('a simple template', function () {
    beforeEach(function () {
      out = loader.apply(obj, ['hello {{world}}']);
    });

    it('is wrapped in module.exports', function () {
      expect(out).match(/^module\.exports/);
    });

    it('is terminated by a semicolon', function () {
      expect(out).match(/;$/);
    });

    it('returns valid javascript', function () {
      var m = eval("var module={};"+out+";module;");
      expect(m.exports).be.object;
    });

    it('contains the words', function () {
      expect(out).include("hello");
      expect(out).include("world");
    });
  });
});

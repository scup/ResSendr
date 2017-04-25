"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Handler = function () {
  function Handler(checker, resolver) {
    _classCallCheck(this, Handler);

    this.checker = checker;
    this.resolver = resolver;
  }

  _createClass(Handler, [{
    key: "check",
    value: function check(value) {
      return this.checker(value);
    }
  }, {
    key: "resolve",
    value: function resolve(value, res, cb) {
      return this.resolver(value, res, cb);
    }
  }]);

  return Handler;
}();

exports.default = Handler;
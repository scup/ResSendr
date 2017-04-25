'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Handler = require('./Handler.js');

var _Handler2 = _interopRequireDefault(_Handler);

var _consts = require('./consts');

var _consts2 = _interopRequireDefault(_consts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponseManager = function () {
  function ResponseManager() {
    _classCallCheck(this, ResponseManager);

    this.handlers = [];
    this.customHandlers = [];
  }

  _createClass(ResponseManager, [{
    key: 'addCustomHandler',
    value: function addCustomHandler(handler, resolver) {
      if (!(handler instanceof _Handler2.default)) return this.customHandlers.push(new _Handler2.default(handler, resolver));
      return this.customHandlers.push(handler);
    }
  }, {
    key: 'addHandler',
    value: function addHandler(handler, resolver) {
      if (!(handler instanceof _Handler2.default)) return this.handlers.push(new _Handler2.default(handler, resolver));
      return this.handlers.push(handler);
    }
  }, {
    key: 'handle',
    value: function handle(method) {
      var _this = this;

      return function (req, res, next) {
        var value = method(req, res, next);
        return _this._resolve(value, res);
      };
    }
  }, {
    key: '_checkResolver',
    value: function _checkResolver(value) {
      return function (handler) {
        return handler.check(value);
      };
    }
  }, {
    key: '_findCustomResolver',
    value: function _findCustomResolver(value) {
      return this.customHandlers.find(this._checkResolver(value));
    }
  }, {
    key: '_findResolver',
    value: function _findResolver(value) {
      return this.handlers.find(this._checkResolver(value));
    }
  }, {
    key: '_resolve',
    value: function _resolve(value, res) {
      var customResolver = this._findCustomResolver(value);

      if (customResolver) {
        value = customResolver.resolve(value, res, this._resolve.bind(this));
        if (value == _consts2.default.delayedSolver) {
          return _consts2.default.delayedSolver;
        }
      }

      var resolver = this._findResolver(value);
      if (resolver) {

        var solvedValue = resolver.resolve(value, res, this._resolve.bind(this));
        if (solvedValue !== _consts2.default.delayedSolver) {
          return res.end(solvedValue);
        } else {
          return _consts2.default.delayedSolver;
        }
      }

      throw 'Response Handler could not find a proper handler for this value';
    }
  }]);

  return ResponseManager;
}();

exports.default = ResponseManager;
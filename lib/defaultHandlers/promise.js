'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _consts = require('../consts');

var _consts2 = _interopRequireDefault(_consts);

var _Handler = require('../Handler');

var _Handler2 = _interopRequireDefault(_Handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checker = function checker(value) {
  return value && value.hasOwnProperty('then') && value.hasOwnProperty('catch');
};

var resolver = function resolver(value, res, delayedSolver) {
  value.then(function (v) {
    return delayedSolver(v, res, delayedSolver);
  });
  return _consts2.default.delayedSolver;
};

exports.default = new _Handler2.default(checker, resolver);
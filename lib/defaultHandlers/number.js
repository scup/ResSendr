'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Handler = require('../Handler');

var _Handler2 = _interopRequireDefault(_Handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checker = function checker(value) {
  return typeof value === 'number';
};

var resolver = function resolver(value) {
  return value.toString();
};

exports.default = new _Handler2.default(checker, resolver);
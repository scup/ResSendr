'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Handler = require('../Handler');

var _Handler2 = _interopRequireDefault(_Handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPromise = function isPromise(v) {
  return v.hasOwnProperty('then');
};

var checker = function checker(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !Array.isArray(value) && !isPromise(value);
};

var resolver = function resolver(value) {
  return JSON.stringify(value);
};

exports.default = new _Handler2.default(checker, resolver);
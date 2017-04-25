'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ResponseManager = require('./ResponseManager');

var _ResponseManager2 = _interopRequireDefault(_ResponseManager);

var _defaultHandlers = require('./defaultHandlers');

var _defaultHandlers2 = _interopRequireDefault(_defaultHandlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rm = new _ResponseManager2.default();

_defaultHandlers2.default.forEach(rm.addHandler.bind(rm));

exports.default = rm;
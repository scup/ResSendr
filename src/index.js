const ResponseManager = require('./ResponseManager');
const Handlers = require('./defaultHandlers');
const rm = new ResponseManager();

Handlers.forEach(rm.addHandler);

module.exports = rm;



require("babel-register")({
  "presets": ["es2015"]
});

var Jasmine = require('jasmine'); // eslint-disable-line no-var
var SpecReporter = require('jasmine-spec-reporter'); // eslint-disable-line no-var
var noop = function() {}; // eslint-disable-line no-var
var jrunner = new Jasmine(); // eslint-disable-line no-var

jrunner.configureDefaultReporter({print: noop});
jasmine.getEnv().addReporter(new SpecReporter());
jrunner.loadConfigFile();                         
jrunner.execute();

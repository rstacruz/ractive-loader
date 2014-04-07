module.exports = function(str) {
  var Ractive = require('ractive');
  return 'module.exports=' + JSON.stringify(Ractive.parse(str)) + ';';
};

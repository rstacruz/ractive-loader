module.exports = function (source) {
	var Ractive = require("ractive");
 	Ractive.DEBUG = false;
	this.cacheable();
	return "module.exports=" + JSON.stringify(Ractive.parse(source)) + ";";
};

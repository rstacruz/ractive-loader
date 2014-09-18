module.exports = function (source) {
	var Ractive = require("ractive");

	this.cacheable();
	return "module.exports=" + JSON.stringify(Ractive.parse(source)) + ";";
};

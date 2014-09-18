module.exports = function (source) {
	var Ractive = require("ractive");
	return "module.exports=" + JSON.stringify(Ractive.parse(source)) + ";";
};

module.exports = function (source) {

    var callback = this.async();

    this.cacheable();

    this.resolve(this.context, "ractive", function(err, result) {

        if(err) return callback(err);

        var Ractive = require(result);
        Ractive.DEBUG = false;
        
        callback(null, "module.exports=" + JSON.stringify(Ractive.parse(source)) + ";");
    });

};

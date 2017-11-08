var fs = require("fs")

module.exports = {

    var: function(fileName, callBack) {
        fs.readFile(fileName, function(err, data) {

            if (err) {
                throw err;
            }
            var list = JSON.parse(data)

            callBack(list)
        })
    }
}
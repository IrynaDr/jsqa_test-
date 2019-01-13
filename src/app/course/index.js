// src/app/course/index.js

// (function() {
//     startDate = new Date('May 7, 2018 00:00:00');
//     return {
//         getStartDate: function () {
//             //return console.log(startDate);
//             return startDate;
//         }
//     }
//
// })();
//
// module.exports.getStartDate;

(function () {
    startDate = new Date('May 7, 2018 00:00:00');
        exports.getStartDate = function () {
            //return console.log(startDate);
            return startDate;
        }
})();

// In the course module, export a new method, setStartDate(value).
// This method should set the startDate property to the value argument.

(function () {
    //Built-in NodeJS Modules
    const fs = require('fs');
    const path = require('path');
    require('../app.config');

    let _config = '[Empty config]';
    const jsonPath = path.join(__dirname, '..', 'data', 'app.config.json' );

    function _parseData(err, data) {
        if (err){
            throw err;
        }
        _config = data;
        console.log('Loaded config: ', _config);
    }

    function _loadConfig() {
        fs.readFile(jsonPath, 'utf8', '_parseData')
    }

//Export Module API
    exports.setStartDate = () => {
        return _config;
    }
    exports.loadConfig = () => {
        return _loadConfig;
    }

})();



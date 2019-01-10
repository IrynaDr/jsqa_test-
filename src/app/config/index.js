//src/app/config/index.js

'use strict';

(function () {
    //Built-in NodeJS Modules
    const fs = require('fs');
    const path = require('path');
    require('../util/console');

    let _config = '[Empty config]';
    const jsonPath = path.join(__dirname, '..', 'data', 'config.json' );
    
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
    exports.getConfig = () => {
        return _config;
    }
    exports.loadConfig = () => {
        return _loadConfig;
    }

})();



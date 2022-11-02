var fs          = require('fs');
var path        = require('path');
var basename    = path.basename(__filename);
var controllers  = {};

fs.readdirSync(__dirname).filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var ctrl = require(path.join(__dirname, file));
        var controllerName = file.replace('.controller.js','');
        controllers[controllerName] = ctrl;
    });

module.exports = controllers;
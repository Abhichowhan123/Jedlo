var fs          = require('fs');
var path      = require('path');
var basename    = path.basename(__filename);
var repo        = {};

fs.readdirSync(__dirname).filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        var repository = require(path.join(__dirname, file));
        var repoName = file.replace('.repo.js','');
        repo[repoName] = repository;
    });

module.exports = repo;
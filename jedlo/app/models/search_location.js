'use strict';

module.exports = (sequelize, DataTypes) => {
    var SearchLocation = sequelize.define('search_location', {
        SearchLocationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserID: DataTypes.INTEGER,
        MaxLocLimit: DataTypes.INTEGER,
    }, {
        tableName: 'tblSearchLocation',
        UserID: 'UserID',
        MaxLocLimit: 'MaxLocLimit',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return SearchLocation;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Favourite = sequelize.define('favourite', {
        FavouriteID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserID: DataTypes.INTEGER,
        RestID: DataTypes.INTEGER,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblfavourite',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return Favourite;
};
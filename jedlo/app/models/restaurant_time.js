'use strict';

module.exports = (sequelize, DataTypes) => {
    var RestTime = sequelize.define('restaurant_time', {
        TimeID: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        RestID: DataTypes.INTEGER,
        OpenTime: DataTypes.TIME,
        CloseTime: DataTypes.TIME,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblRestaurantTime',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return RestTime;
};

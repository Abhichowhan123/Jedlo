'use strict';

module.exports = (sequelize, DataTypes) => {
    var HomeAd = sequelize.define('home_ad', {
        AddID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: DataTypes.STRING,
        ImagePath: DataTypes.STRING,
        Active: DataTypes.BOOLEAN,
		HomePincode: DataTypes.STRING
    }, {
        tableName: 'tblHomeAds',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    return HomeAd;
};
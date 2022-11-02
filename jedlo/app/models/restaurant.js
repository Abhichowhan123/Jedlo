'use strict';

module.exports = (sequelize, DataTypes) => {
    var Restaurant = sequelize.define('restaurant', {
        RestID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ZoneID: DataTypes.INTEGER,
        Name: DataTypes.STRING,
        Contact: DataTypes.INTEGER,
        Address: DataTypes.INTEGER,
        FoodPreparation: DataTypes.INTEGER,
        CostPP: DataTypes.INTEGER,
        TieupPercent: DataTypes.INTEGER,
        TieupGST: DataTypes.INTEGER,
        GST: DataTypes.INTEGER,
        DeliveryGST: DataTypes.INTEGER,
        MaxTotal: DataTypes.INTEGER,
        AddAmount: DataTypes.INTEGER,
        Latitude: DataTypes.INTEGER,
        Longitude: DataTypes.INTEGER,
        AvgRating: DataTypes.INTEGER,
        LogoImgName: DataTypes.INTEGER,
        LogoImgPath: DataTypes.INTEGER,
        FCMToken: DataTypes.INTEGER,
        LoggedIn: DataTypes.INTEGER,
        Status: DataTypes.INTEGER,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblZones',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    /*Cart.associate = models => {
        Cart.hasMany(models.cart_detail, {
            foreignKey: 'CartID'
        });
    }*/

    return Restaurant;
};

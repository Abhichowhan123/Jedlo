'use strict';

module.exports = (sequelize, DataTypes) => {
    var Lightning = sequelize.define('lightning_offer', {
        lightningID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        foodItemID: DataTypes.INTEGER,
        userID: DataTypes.INTEGER,
        minUserID: DataTypes.INTEGER,
		minQuantityUsed: DataTypes.INTEGER,
        maxQuantityUsed: DataTypes.INTEGER,
		orderID: DataTypes.INTEGER,
        minOfferStatus: DataTypes.INTEGER,
        maxOfferStatus: DataTypes.INTEGER
    }, {
        tableName: 'tblLightningOffers',
        foodItemID: 'foodItemID',
        userID: 'userID',
        minUserID: 'minUserID',
		minQuantityUsed: 'minQuantityUsed',
        maxQuantityUsed: 'maxQuantityUsed',
		orderID: 'orderID',
        minOfferStatus: 'minOfferStatus',
        maxOfferStatus: 'maxOfferStatus',
        createdAt: 'createdOn',
        updatedAt: 'modifiedOn'
    });

    return Lightning;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
    var RestOffer = sequelize.define('restaurant_offer', {
        RestOfferID: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        RestID: DataTypes.INTEGER,
        DiscountPercent: DataTypes.INTEGER,
        MaxAmount: DataTypes.INTEGER,
        MinAmount: DataTypes.INTEGER,
        StartDate: DataTypes.DATE,
        EndDate: DataTypes.DATE,
		SDate: DataTypes.DATE,
		EDate: DataTypes.DATE,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblRestOffers',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return RestOffer;
};

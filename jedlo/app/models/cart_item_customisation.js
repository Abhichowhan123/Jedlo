'use strict';

module.exports = (sequelize, DataTypes) => {
    var CartItemCustomisation = sequelize.define('cart_item_customisation', {
        CartCustomID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CartDetailID: DataTypes.INTEGER,
        CustomCatID: DataTypes.INTEGER,
        CustomItemID: DataTypes.INTEGER,
        CustomItemName: DataTypes.STRING,
        Price: DataTypes.DECIMAL,
        Veg: DataTypes.INTEGER,
    }, {
        tableName: 'tblCartItemCustomisation',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return CartItemCustomisation;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
    var Cart = sequelize.define('cart', {
        CartID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserID: DataTypes.INTEGER,
        RestID: DataTypes.STRING,
        Instructions: DataTypes.STRING,
        TotalItems: DataTypes.INTEGER,
        AddressID: DataTypes.INTEGER,
        DeviceType: DataTypes.STRING,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblCart',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    /*Cart.associate = function(models) {
        models.cart.hasMany(models.cart_item,{
            foreignKey: 'CartId'
        });
    };*/

    Cart.associate = models => {
        Cart.hasMany(models.cart_detail, {
            foreignKey: 'CartID'
        });
    }

    return Cart;
};

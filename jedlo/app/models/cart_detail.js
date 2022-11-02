'use strict';

module.exports = (sequelize, DataTypes) => {
    var CartDetail = sequelize.define('cart_detail', {
        CartDetailId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        CartID: DataTypes.INTEGER,
        CategoryID: DataTypes.INTEGER,
        CategoryName: DataTypes.STRING,
        FoodItemId: DataTypes.INTEGER,
        ItemName: DataTypes.STRING,
        Customisations: DataTypes.STRING,
        Veg: DataTypes.INTEGER,
        Price: DataTypes.DECIMAL,
        JedloAddPrice: DataTypes.DECIMAL,
        Quantity: DataTypes.INTEGER,
    }, {
        tableName: 'tblCartDetails',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    CartDetail.associate = models => {
        CartDetail.hasMany(models.cart_item_customisation, {
            foreignKey: 'CartDetailID'
        });
    }

    return CartDetail;
};

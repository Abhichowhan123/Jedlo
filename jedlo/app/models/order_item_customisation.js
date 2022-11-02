'use strict';

module.exports = (sequelize, DataTypes) => {
    var OrderItemCust = sequelize.define('order_item_customisation', {
        OICustID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        OrderDetailID: DataTypes.INTEGER,
        CustomCatID: DataTypes.INTEGER,
        CustomItemID: DataTypes.INTEGER,
        CustomItemName: DataTypes.STRING,
        Price: DataTypes.DECIMAL,
        Veg: DataTypes.BOOLEAN,
    }, {
        tableName: 'tblOrderItemCustomisation',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    return OrderItemCust;
};

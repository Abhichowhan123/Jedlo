'use strict';

module.exports = (sequelize, DataTypes) => {
    var OrderDetail = sequelize.define('order_detail', {
        OrderDetailID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        OrderID: DataTypes.INTEGER,
        CategoryID: DataTypes.INTEGER,
        CategoryName: DataTypes.STRING,
        FoodItemID: DataTypes.INTEGER,
        ItemName: DataTypes.STRING,
        Customisations: DataTypes.STRING,
        Veg: DataTypes.BOOLEAN,
        Price: DataTypes.DECIMAL,
        JedloAddPrice: DataTypes.DECIMAL,
        Quantity: DataTypes.INTEGER,
    }, {
        tableName: 'tblOrderDetails',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    return OrderDetail;
};

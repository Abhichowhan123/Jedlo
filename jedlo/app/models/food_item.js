'use strict';

module.exports = (sequelize, DataTypes) => {
    var FoodItem = sequelize.define('food_item', {
        FoodItemID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        FoodCatID: DataTypes.INTEGER,
        ItemName: DataTypes.STRING,
        ItemDescription: DataTypes.TEXT,
        Customisable: DataTypes.BOOLEAN,
        Veg: DataTypes.BOOLEAN,
        Price: DataTypes.DOUBLE,
		 Mrp: DataTypes.DOUBLE,
        Limited: DataTypes.BOOLEAN,
        Quantity: DataTypes.INTEGER,
        JedloAddPrice: DataTypes.DOUBLE,
        LogoImgName: DataTypes.INTEGER,
        Recommend: DataTypes.BOOLEAN,
        LogoImgPath: DataTypes.TEXT,
        Available: DataTypes.BOOLEAN,
        NextOn: DataTypes.DATE,
        Active: DataTypes.BOOLEAN,        
    }, {
        tableName: 'tblFoodItem',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    return FoodItem;
};

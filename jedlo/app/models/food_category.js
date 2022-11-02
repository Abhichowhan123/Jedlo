'use strict';

module.exports = (sequelize, DataTypes) => {
    var FoodCategory = sequelize.define('food_category', {
        FoodCatID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        RestID: DataTypes.INTEGER,
        CategoryName: DataTypes.STRING,
        CategoryOffer: DataTypes.INTEGER,
        CatOffSDate: DataTypes.DATE,
        CatOffEDate: DataTypes.DATE,
        CatOffActive: DataTypes.INTEGER,
        Veg: DataTypes.BOOLEAN,
        Available: DataTypes.BOOLEAN,
        AvailableOn: DataTypes.DATE,
        Active: DataTypes.BOOLEAN,
    }, {
        tableName: 'tblFoodCategory',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    FoodCategory.associate = models => {
        FoodCategory.hasMany(models.food_item, {
            foreignKey: 'FoodCatID'
        });
    }

    return FoodCategory;
};

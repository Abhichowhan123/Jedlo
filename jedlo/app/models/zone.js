'use strict';

module.exports = (sequelize, DataTypes) => {
    var Zone = sequelize.define('zone', {
        ZoneID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        ZoneName: DataTypes.STRING,
        PlaceOrder: DataTypes.INTEGER,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblZones',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    /*Cart.associate = models => {
        Cart.hasMany(models.cart_detail, {
            foreignKey: 'CartID'
        });
    }*/

    return Zone;
};

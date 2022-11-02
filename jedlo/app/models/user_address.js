'use strict';

module.exports = (sequelize, DataTypes) => {
    var UserAddress = sequelize.define('user_address', {
        AddressID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserID: DataTypes.INTEGER,
        Label: DataTypes.STRING,
        Location: DataTypes.STRING,
        House: DataTypes.STRING,
        Apartment: DataTypes.STRING,
        Zone: DataTypes.TEXT,
        Latitude: DataTypes.STRING,
        Longitude: DataTypes.STRING,
        Active: DataTypes.INTEGER,
    }, {
        tableName: 'tblUserAddress',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return UserAddress;
};

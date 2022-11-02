'use strict';

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        UserID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Contact: DataTypes.STRING,
        Name: DataTypes.STRING,
        Email: DataTypes.STRING,
        Verified: DataTypes.INTEGER,
        Active: DataTypes.INTEGER,
        Wallet: DataTypes.INTEGER,
        ReferralCode: DataTypes.STRING,
        Banned: DataTypes.INTEGER,
        BannedTill: DataTypes.DATE,
        FCMToken: DataTypes.STRING,
    }, {
        tableName: 'tblUsers',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return User;
};

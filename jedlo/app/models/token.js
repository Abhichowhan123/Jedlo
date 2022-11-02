'use strict';

module.exports = (sequelize, DataTypes) => {
    var FCMToken = sequelize.define('token', {
        TokenID: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        RestID: DataTypes.INTEGER,
        FCMToken: DataTypes.STRING,
        LoggedIn: DataTypes.INTEGER
    }, {
        tableName: 'tblTokens',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return FCMToken;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
    var HomeNotification = sequelize.define('home_notification', {
        NotificationID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Title: DataTypes.STRING,
        Message: DataTypes.STRING,
        Active: DataTypes.BOOLEAN,
    }, {
        tableName: 'tblHomeNotifications',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return HomeNotification;
};

'use strict';

module.exports = (sequelize, DataTypes) => {
    var AdminNumber = sequelize.define('admin_number', {
        AdminNumberID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: DataTypes.STRING,
        Number: DataTypes.STRING,
        
    }, {
        tableName: 'tblAdminNumber',
        createdAt: 'CreatedOn',
        updatedAt: 'ModifiedOn'
    });

    return AdminNumber;
};
'use strict';

module.exports = (sequelize, DataTypes) => {
    var Help = sequelize.define('help', {
        HelpID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Question: DataTypes.STRING,
        Answer: DataTypes.STRING,
    }, {
        tableName: 'tblHelp',
        createdAt: 'CreatedOn',
        updatedAt: false
    });

    return Help;
};

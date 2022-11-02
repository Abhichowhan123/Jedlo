'use strict';

module.exports = (sequelize, DataTypes) => {
    var Variable = sequelize.define('variable', {
        VariableID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        PlaceOrder: DataTypes.BOOLEAN,
        Feedback: DataTypes.STRING,
        ContactUs: DataTypes.STRING,
    }, {
        tableName: 'tblVariables',
        timestamps: false
    });

    return Variable;
};

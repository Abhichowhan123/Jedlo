const { validationResult } = require('express-validator');

exports.ValidationResult = async (req) => {
    
    penalty = await models.sequelize.query(
        "SELECT Amount FROM tblOrderPenalty WHERE UserID  = :user_id AND Paid = 0", {
        replacements: { user_id: userId },
        type: QueryTypes.SELECT,
        raw: true,
    });

    return penalty;
};
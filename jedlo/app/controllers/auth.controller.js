const { check, validationResult } = require('express-validator');
const models = require('../models');
const userRepo = require('../repositories/user.repo.js');
const moment = require('moment');

exports.validateLogin = [
    check('contact').trim().notEmpty().isInt(),
];

exports.login = async (req, res) => {
    /** BEGIN validation */
    resp = {};
    var errors = validationResult(req);
    if(!errors.isEmpty()){
        resp.success = false;
        resp.message = 'Missing Input Parameters!!';
        resp.data = {};
        return res.json(resp);
    }
    /** END validation */

    let contact = req.body.contact;
    var result = await userRepo.getUser(contact);

    if(result.success){
        resp.success = true;
        resp.message = 'OK';
        resp.data = result.data;
    }else{
        resp.success = false;
        resp.message = 'User Not Found!!!';
        resp.data = {};
    }

    return res.json(resp);
};


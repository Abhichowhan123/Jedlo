const { body, check, validationResult } = require('express-validator');
const lodash = require('lodash');
const { QueryTypes } = require('sequelize');
const models = require('../models');
const { sequelize } = require('../models');
const moment = require('moment');
const { isEmpty } = require('lodash');
//const { NUMBER } = require('sequelize');




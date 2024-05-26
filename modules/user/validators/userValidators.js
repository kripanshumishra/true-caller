"use strict";

const Joi                             = require('joi');
const constants                       = require('../../../responses/responseConstants');
const validator                       = require('../../../validators/joiValidator');
const apiReferenceModule              = constants.modules.USER;
const registerConstants               = require('../properties/registerConstants')

exports.register = async (req, res, next) => {
    req.apiReference = {
      module: apiReferenceModule,
      api   : "register"
    };
    
    let schema =  Joi.object().keys ({
      phone_number    : Joi.number().strict().max(999999999999999).required(),
      country_code    : Joi.string().trim().max(5).pattern(/^\+(\d{1,3})/).required().messages({
        'string.pattern.base' : registerConstants.VALIDATION_ERROR.INVALID_COUNTRY_CODE,
      }),
      email           : Joi.string().email().trim().optional(),
      password        : Joi.string().trim().required(),
      name            : Joi.string().trim().required()
    });
    
    let reqBody = { ... req.body };
    let request = { ... req };
    
    let validFields = await validator.validateFields(req.apiReference, request, reqBody, res, schema, emptyHeaderStructure);
    if (validFields) {
      next();
    }
};

exports.login = async(req,res,next)=>{
    req.apiReference = {
        module: apiReferenceModule,
        api   : "login"
    };

    let schema =  Joi.object().keys ({
        phone_number    : Joi.number().strict().max(999999999999999).required(),
        password        : Joi.string().trim().required()
    });
      
      let reqBody = { ... req.body };
      let request = { ... req };
      
      let validFields = await validator.validateFields(req.apiReference, request, reqBody, res, schema, emptyHeaderStructure);
      if (validFields) {
        next();
      }
};
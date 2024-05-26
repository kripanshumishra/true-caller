"use strict";

const logging                       = require('../../../logging/logging');
const responses                     = require('../../../responses/responses');
const userService                   = require('../services/userService');
const constants                     = require('./../../../responses/responseConstants');


exports.register = async (req, res) => {
  const apiReference  = req.apiReference;
  const requestBody   = { ... req.body };

  try {
    const response = await userService.register(apiReference, requestBody);
    logging.log(apiReference, { serviceResponse: response });

    if (response.success) {
      return responses.success(res, response.data,constants.responseMessages.REGISTER_SUCCESS);
    }

    return responses.failure(res, response.data, response.error);
  } catch (error) {
    logging.logError(apiReference, { EVENT: "Register New User ERROR", ERROR: error, STACK: error.stack });
    return responses.internalServerError(res);
  }
};
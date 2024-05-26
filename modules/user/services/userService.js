"use strict";

const logging                       = require('../../../logging/logging');

exports.register = async (apiReference,opts)=>{
    let response = { success : false };
    logging.log(apiReference,{ EVENT : "LOGGING USER SERVICE",OPTS : opts });

    
}
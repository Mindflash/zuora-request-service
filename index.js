'use strict';

const nice = require('nice-request');
const zuoraApi = require('./zuora-api');


let apiaccesskeyid = null;

let apisecretaccesskey = null;

let logger = null;

let baseUrl = null;


exports.setup = (keyId, accessKey, log, isProd) => {
  apiaccesskeyid = keyId;
  apisecretaccesskey = accessKey;
  logger = log;
  baseUrl = isProd === true ? 'https://rest.zuora.com/v1/' : 'https://rest.apisandbox.zuora.com/v1/';
  nice.setup(logger, 'billing-service');
};

exports.api = () => zuoraApi(apiaccesskeyid, apisecretaccesskey, baseUrl);

'use strict';

const isNull = require('lodash/isNull');

let apiaccesskeyid = null;

let apisecretaccesskey = null;

let baseUrl = null;


exports.setup = (keyId, accessKey, isProd) => {
  apiaccesskeyid = keyId;
  apisecretaccesskey = accessKey;
  baseUrl = isProd === true ? 'https://rest.zuora.com/v1' : 'https://rest.apisandbox.zuora.com/v1';
};

exports.headers = () => {
  if (isNull(apiaccesskeyid)) {
    throw new TypeError('an api access key id is required to authenticate with zuora');
  }

  if (isNull(apisecretaccesskey)) {
    throw new TypeError('an api secret access key is required to authenticate with zuora');
  }

  return {
    apiaccesskeyid,
    apisecretaccesskey,
    'content-Type': 'application/json'
  };
};

exports.baseUrl = () => baseUrl

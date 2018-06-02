'use strict';

const isNull = require('lodash/isNull');

let apiaccesskeyid = null;

let apisecretaccesskey = null;

let baseUrl = null;

let defaultRequestOptions = null;

exports.setup = (keyId, accessKey, isProd, defaultOptions) => {
  apiaccesskeyid = keyId;
  apisecretaccesskey = accessKey;
  baseUrl =
    isProd === true
      ? 'https://rest.zuora.com/v1'
      : 'https://rest.apisandbox.zuora.com/v1';
  defaultRequestOptions = defaultOptions || {};
};

exports.headers = () => {
  if (isNull(apiaccesskeyid)) {
    throw new TypeError(
      'an api access key id is required to authenticate with zuora',
    );
  }

  if (isNull(apisecretaccesskey)) {
    throw new TypeError(
      'an api secret access key is required to authenticate with zuora',
    );
  }

  return {
    apiaccesskeyid,
    apisecretaccesskey,
    'content-Type': 'application/json',
  };
};

exports.baseUrl = () => baseUrl;
exports.defaultRequestOptions = () => defaultRequestOptions;

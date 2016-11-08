'use strict';

const isNull = require('lodash/isNull');
const subscriptions = require('./subscriptions');
const object = require('./zuora-object-resource');


module.exports = (apiaccesskeyid, apisecretaccesskey, baseUrl) => {
  if (isNull(apiaccesskeyid)) {
    throw new TypeError('an api access key id is required to authenticate with zuora');
  }

  if (isNull(apisecretaccesskey)) {
    throw new TypeError('an api secret access key is required to authenticate with zuora');
  }

  const headers = {
    apiaccesskeyid,
    apisecretaccesskey,
    'content-Type': 'application/json'
  };

  return {
    subscriptions: subscriptions(headers, baseUrl),
    object: object(headers, baseUrl)
  };
};

'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/usage
  create: requestOptions => request('POST', 'usage', requestOptions),

  // https://rest.zuora.com/v1/usage/accounts/{account-key}
  find: (accountKey, requestOptions) => request('GET', `usage/accounts/${accountKey}`, requestOptions)
};

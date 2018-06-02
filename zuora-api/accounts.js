'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/accounts
  create: requestOptions => request('POST', 'accounts', requestOptions),

  // https://rest.zuora.com/v1/accounts/{account-key}
  find: (accountKey, requestOptions) => request('GET', `accounts/${accountKey}`, requestOptions),

  // https://rest.zuora.com/v1/accounts/{account-key}
  update: (accountKey, requestOptions) => request('PUT', `accounts/${accountKey}`, requestOptions),

  // https://rest.zuora.com/v1/accounts/{account-key}/summary
  summary: accountKey => request('GET', `accounts/${accountKey}/summary`)
};

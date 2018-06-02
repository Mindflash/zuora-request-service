'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/hmac-signatures
  create: requestOptions => request('POST', 'hmac-signatures', requestOptions)
};

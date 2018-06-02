'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/rsa-signatures
  generate: requestOptions => request('POST', 'rsa-signatures', requestOptions),

  // https://rest.zuora.com/v1/rsa-signatures/decrypt
  decrypt: requestOptions => request('POST', 'rsa-signatures/decrypt', requestOptions)
};

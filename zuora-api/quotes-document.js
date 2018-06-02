'use strict';

const request = require('./proxied-request');


module.exports = {

  // https://rest.zuora.com/v1/quotes/document
  document: requestOptions => request('POST', 'quotes/document', requestOptions)
};

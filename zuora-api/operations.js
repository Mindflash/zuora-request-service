'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/operations/invoice-collect
  invoiceCollect: requestOptions => request('POST', 'operations/invoice-collect', requestOptions)
};

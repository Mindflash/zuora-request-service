'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/hostedpages
  list: requestOptions => request('GET', 'hostedpages', requestOptions)
};

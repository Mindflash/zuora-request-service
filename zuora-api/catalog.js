'use strict';


const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/catalog/products
  list: requestOptions => request('GET', 'catalog/products', requestOptions)
};

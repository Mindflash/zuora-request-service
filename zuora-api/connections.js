'use strict';

const request = require('./proxied-request');


module.exports = {

  // https://rest.zuora.com/v1/connections
  connect: requestOptions => request('POST', 'connections', requestOptions)
};

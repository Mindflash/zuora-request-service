'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/revenue-recognition-rules/subscription-charges/{charge-key}
  find: (chargeKey, requestOptions) => request('GET', `revenue-recognition-rules/subscription-charges/${chargeKey}`, requestOptions)
};

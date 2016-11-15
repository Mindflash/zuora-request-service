'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/bulk
  bulk: requestOptions => request('POST', 'bulk', requestOptions),

  // https://rest.zuora.com/v1/bulk/{bulk-key}
  find: (bulkKey, requestOptions) => request('GET', `bulk/${bulkKey}`, requestOptions),

  // https://rest.zuora.com/v1/bulk/{bulk-key}/stop
  stop: (bulkKey, requestOptions) => request('PUT', `bulk/${bulkKey}/stop`, requestOptions)
};

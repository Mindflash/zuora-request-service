'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/journal-runs
  create: requestOptions => request('POST', 'journal-runs', requestOptions),

  // https://rest.zuora.com/v1/journal-runs/{jr-number}
  delete: (jrNumber, requestOptions) => request('DELETE', `journal-runs/${jrNumber}`, requestOptions),

  // https://rest.zuora.com/v1/journal-runs/{jr-number}
  find: (jrNumber, requestOptions) => request('GET', `journal-runs/${jrNumber}`, requestOptions),

  // https://rest.zuora.com/v1/journal-runs/{jr-number}/cancel
  cancel: (jrNumber, requestOptions) => request('PUT', `journal-runs/${jrNumber}/cancel`, requestOptions)
};

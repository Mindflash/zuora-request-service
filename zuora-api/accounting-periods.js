'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/accounting-periods
  list: requestOptions => request('GET', 'accounting-periods', requestOptions),

  // https://rest.zuora.com/v1/accounting-periods
  create: requestOptions => request('POST', 'accounting-periods', requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}
  delete: (apId, requestOptions) => request('DELETE', `accounting-periods/${apId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}
  find: (apId, requestOptions) => request('GET', `accounting-periods/${apId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}
  update: (apId, requestOptions) => request('PUT', `accounting-periods/${apId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}/close
  close: (apId, requestOptions) => request('PUT', `accounting-periods/${apId}/close`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}/pending-close
  pending: (apId, requestOptions) => request('PUT', `accounting-periods/${apId}/pending-close`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}/reopen
  reopen: (apId, requestOptions) => request('PUT', `accounting-periods/${apId}/reopen`, requestOptions),

  // https://rest.zuora.com/v1/accounting-periods/{ap-id}/run-trial-balance
  runTrial: (apId, requestOptions) => request('PUT', `accounting-periods/${apId}/run-trial-balance`, requestOptions)
};

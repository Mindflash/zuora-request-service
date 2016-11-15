'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/accounting-codes
  list: requestOptions => request('GET', 'accounting-codes', requestOptions),

  // https://rest.zuora.com/v1/accounting-codes
  create: requestOptions => request('POST', 'accounting-codes', requestOptions),

  // https://rest.zuora.com/v1/accounting-codes/{ac-id}
  delete: (acId, requestOptions) => request('DELETE', `accounting-codes/${acId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-codes/{ac-id}
  query: (acId, requestOptions) => request('GET', `accounting-codes/${acId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-codes/{ac-id}
  update: (acId, requestOptions) => request('PUT', `accounting-codes/${acId}`, requestOptions),

  // https://rest.zuora.com/v1/accounting-codes/{ac-id}/activate
  activate: (acId, requestOptions) => request('PUT', `accounting-codes/${acId}/activate`, requestOptions),

  // https://rest.zuora.com/v1/accounting-codes/{ac-id}/deactivate
  deactivate: (acId, requestOptions) => request('PUT', `accounting-codes/${acId}/deactivate`, requestOptions)
};

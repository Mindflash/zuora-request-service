'use strict';

const request = require('./proxied-request');
const curry = require('lodash/curry');
const get = require('lodash/get');
const flow = require('lodash/flow');
const has = require('lodash/has');

const maxAmendSupport = 10;
const maxCreateDeleteSupport = 50;

const checkPayload = curry((path, maxSupport, requestOptions) => {
  if (has(requestOptions, path) && get(requestOptions, path).length > maxSupport) {
    throw new RangeError('This action does not support that many objects');
  }

  return requestOptions;
});

module.exports = {

  //  https://rest.zuora.com/v1/action/amend
  amend: flow(checkPayload('requests', maxAmendSupport), requestOptions => request('POST', 'action/amend', requestOptions)),

  // https://rest.zuora.com/v1/action/create
  create: flow(checkPayload('objects', maxCreateDeleteSupport), requestOptions => request('POST', 'action/create', requestOptions)),

  // https://rest.zuora.com/v1/action/delete
  delete: flow(checkPayload('ids', maxCreateDeleteSupport), requestOptions => request('POST', 'action/delete', requestOptions)),

  // https://rest.zuora.com/v1/action/execute
  execute: requestOptions => request('POST', 'action/execute', requestOptions),

  // https://rest.zuora.com/v1/action/generate
  generate: requestOptions => request('POST', 'action/generate', requestOptions),

  // https://rest.zuora.com/v1/action/query
  query: requestOptions => request('POST', 'action/query', requestOptions),

  // https://rest.zuora.com/v1/action/queryMore
  queryMore: requestOptions => request('POST', 'action/queryMore', requestOptions),

  // https://rest.zuora.com/v1/action/subscribe
  subscribe: requestOptions => request('POST', 'action/subscribe', requestOptions),

  // https://rest.zuora.com/v1/action/update
  update: requestOptions => request('POST', 'action/update', requestOptions)
};

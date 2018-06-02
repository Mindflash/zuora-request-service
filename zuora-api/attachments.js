'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/attachments
  add: requestOptions => request('POST', 'attachments', requestOptions),

  // https://rest.zuora.com/v1/attachments/{attachment-id}
  delete: (attachmentId, requestOptions) => request('DELETE', `attachments/${attachmentId}`, requestOptions),

  // https://rest.zuora.com/v1/attachments/{attachment-id}
  find: (attachmentId, requestOptions) => request('GET', `attachments/${attachmentId}`, requestOptions),

  // https://rest.zuora.com/v1/attachments/{attachment-id}
  update: (attachmentId, requestOptions) => request('PUT', `attachments/${attachmentId}`, requestOptions),

  // https://rest.zuora.com/v1/attachments/{object-type}/{object-key}
  list: (type, key, requestOptions) => request('GET', `attachments/${type}/${key}`, requestOptions)
};

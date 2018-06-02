'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/object/nameOfObject
  find: (objectName, id, requestOptions) => request('GET', `object/${objectName}/${id}`, requestOptions),

  // https://rest.zuora.com/v1/object/nameOfObject
  create: (objectName, requestOptions) => request('POST', `object/${objectName}`, requestOptions),

  // https://rest.zuora.com/v1/object/nameOfObject
  delete: (objectName, id, requestOptions) => request('DELETE', `object/${objectName}/${id}`, requestOptions),

  // https://rest.zuora.com/v1/object/nameOfObject
  update: (objectName, id, requestOptions) => request('PUT', `object/${objectName}/${id}`, requestOptions)
};

'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/files/{file-id}
  find: (fileId, requestOptions) => request('GET', `files/${fileId}`, requestOptions)
};

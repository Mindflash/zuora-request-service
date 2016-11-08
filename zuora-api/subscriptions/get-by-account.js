'use strict';

const nice = require('nice-request');

module.exports = (headers, baseUrl, id) => {
  const requestOptions = {
    url: `${baseUrl}subscriptions/accounts/${id}`,
    method: 'GET',
    metricTag: 'get-account-info'
  };

  return nice.request(Object.assign(requestOptions, {headers}));
};

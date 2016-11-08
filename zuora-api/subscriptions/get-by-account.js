'use strict';

const request = require('../proxied-request');

module.exports = (headers, baseUrl, id) => {
  const requestOptions = {
    url: `${baseUrl}subscriptions/accounts/${id}`,
    method: 'GET',
    metricTag: 'subscriptions-by-account'
  };

  return request(Object.assign(requestOptions, {headers}));
};

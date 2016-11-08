'use strict';

const nice = require('nice-request');

module.exports = (headers, baseUrl, id) => {
  const requestOptions = {
    url: `${baseUrl}object/product-rate-plan/${id}`,
    method: 'GET',
    metricTag: 'get-product-rate-plan'
  };

  return nice.request(Object.assign(requestOptions, {headers}));
};

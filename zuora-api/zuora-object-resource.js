'use strict';

const request = require('./proxied-request');

module.exports = (headers, baseUrl) => ({
  find: (resource, id) => request({
    url: `${baseUrl}object/${resource}/${id}`,
    method: 'GET',
    metricTag: resource,
    headers
  }),
  post: (resource, body) => request({
    url: `${baseUrl}object/${resource}/`,
    method: 'POST',
    metricTag: resource,
    headers,
    body
  }),
  delete: (resource, id) => request({
    url: `${baseUrl}object/${resource}/${id}`,
    method: 'DELETE',
    metricTag: resource,
    headers
  }),
  put: (resource, id, body) => request({
    url: `${baseUrl}object/${resource}/${id}`,
    method: 'PUT',
    metricTag: resource,
    headers,
    body
  })
});

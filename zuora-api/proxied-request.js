'use strict';

const nice = require('nice-request');
const get = require('lodash/get');

module.exports = requestOptions =>
  nice.request(requestOptions)
  .tap(result => {
    if (!get(result, 'success')) {
      throw result;
    }
  });

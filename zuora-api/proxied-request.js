'use strict';

const nice = require('nice-request');
const get = require('lodash/get');
const has = require('lodash/has')

module.exports = requestOptions =>
  nice.request(requestOptions)
  .tap(result => {
    if (has(result, 'success') && !get(result, 'success')) {
      throw result;
    }
  });

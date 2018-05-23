'use strict';

const nice = require('nice-request');
const get = require('lodash/get');
const has = require('lodash/has');
const config = require('../zoura-config');
const isObject = require('lodash/isObject');

/**
 * mergeOptions takes a requestOptions object and extra options and merges them together
 * if the extraOptions are an object.
 * @param  {[Object]} requestOptions request options object for nice-request.
 * @param  {[Object]} extraOptions   extra request options i.e queryStrings, body, maxTries etc.
 * @return {[Object]}                suitable object for making http requests from nice-request
 */
const mergeOptions = (requestOptions, extraOptions) => {
  let result = Object.assign(config.defaultRequestOptions(), requestOptions);
  return isObject(extraOptions) ? Object.assign(result, extraOptions) : result;
};

/**
 * Proxied Request gives zurora request service a central access point to nice request and
 * an entry point to proxy/intercept responses from the zuora API. Intercepts 200 responses where the
 * success is marked false and rethrows them as errors.
 * @param  {[String]} method      HTTP request method, GET, POST, PUT, DELETE
 * @param  {[String]} path        URI for zuora API resource
 * @param  {[Object]} extraOptions extra request options i.e queryStrings, body, maxTries etc.
 * @return {[Promise]}             a fullfilled or rejected promise
 */
module.exports = (method, path, extraOptions) =>
  nice
    .request(
      mergeOptions(
        {
          url: `${config.baseUrl()}/${path}`,
          method,
          metricTag: path,
          headers: config.headers(),
        },
        extraOptions,
      ),
    )
    .tap(result => {
      if (has(result, 'success') && get(result, 'success') === false) {
        throw result;
      }
    });

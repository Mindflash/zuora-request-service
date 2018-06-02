'use strict';

const nice = require('nice-request');
const zuoraApi = require('./zuora-api');
const config = require('./zoura-config');

/**
 * Stores configuration information in a singleton to be used as a dependency through out the
 * service.
 * @param  {[string]}  keyId   zuora api access id.
 * @param  {[string]}  accessKey zuora api access key
 * @param  {[object]}  log      logger possessing a .info function.
 * @param  {Boolean} isProd    boolean that indicates if service is in production environment or not.
 */
exports.setup = (keyId, accessKey, isProd, log, defaultRequestOptions) => {
  config.setup(keyId, accessKey, isProd, defaultRequestOptions);
  nice.setup('zuora-service', log);
};

/**
 * api method returns object with methods for calling zuora API.
 * @return {[object]} bject with methods for calling zuora API.
 */
exports.api = () => zuoraApi;

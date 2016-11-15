'use strict';

const nice = require('nice-request');
const zuoraApi = require('./zuora-api');
const config = require('./zoura-config');

exports.setup = (keyId, accessKey, log, isProd) => {
  config.setup(keyId, accessKey, isProd);
  nice.setup('zuora-service', log);
};

exports.api = () => zuoraApi;

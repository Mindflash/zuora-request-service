'use strict';

const partial = require('lodash/partial');
const get = require('./get');

module.exports = (preApplyHeaders, baseUrl) => ({get: partial(get, preApplyHeaders, baseUrl)});

'use strict';

const getByAccount = require('./get-by-account');
const partial = require('lodash/partial');

module.exports = (preApplyHeaders, baseUrl) => ({getByAccount: partial(getByAccount, preApplyHeaders, baseUrl)});

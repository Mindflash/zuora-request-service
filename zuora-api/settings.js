'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/settings/finance/revenue-automation-start-date
  startDate: requestOptions => request('GET', 'settings/finance/revenue-automation-start-date', requestOptions)
};

'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/notification-history/callout
  callout: requestOptions => request('GET', 'notification-history/callout', requestOptions),

  // https://rest.zuora.com/v1/notification-history/email
  email: requestOptions => request('GET', 'notification-history/email', requestOptions)
};

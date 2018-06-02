'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/amendments/subscriptions/{subscription-id}
  bySubscriptionId: (subscriptionId, requestOptions) => request('GET', `amendments/subscriptions/${subscriptionId}`, requestOptions),

  // https://rest.zuora.com/v1/amendments/{amendment-key}
  byAmendmentKey: (amendmentKey, requestOptions) => request('GET', `amendments/${amendmentKey}`, requestOptions)
};

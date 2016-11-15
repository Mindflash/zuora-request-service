'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/subscriptions
  create: requestOptions => request('POST', 'subscriptions', requestOptions),

  // https://rest.zuora.com/v1/subscriptions/accounts/{account-key}
  getByAccount: (accountKey, requestOptions) => request('GET', `subscriptions/accounts/${accountKey}`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/preview
  preview: requestOptions => request('POST', 'subscriptions/preview', requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}
  getByKey: (subscriptionKey, requestOptions) => request('GET', `subscriptions/${subscriptionKey}`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}
  update: (subscriptionKey, requestOptions) => request('PUT', `subscriptions/${subscriptionKey}`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}/cancel
  cancel: (subscriptionKey, requestOptions) => request('PUT', `subscriptions/${subscriptionKey}/cancel`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}/renew,
  renew: (subscriptionKey, requestOptions) => request('PUT', `subscriptions/${subscriptionKey}/renew`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}/resume
  resume: (subscriptionKey, requestOptions) => request('PUT', `subscriptions/${subscriptionKey}/resume`, requestOptions),

  // https://rest.zuora.com/v1/subscriptions/{subscription-key}/suspend
  suspend: (subscriptionKey, requestOptions) => request('PUT', `subscriptions/${subscriptionKey}/suspend`, requestOptions)
};

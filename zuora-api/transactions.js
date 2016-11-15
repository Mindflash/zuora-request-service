'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/transactions/invoices/accounts/{account-key}
  getInvoices: (accountKey, requestOptions) => request('GET', `transactions/invoices/accounts/${accountKey}`, requestOptions),

  // https://rest.zuora.com/v1/transactions/payments/accounts/{account-key}
  getPayments: (accountKey, requestOptions) => request('GET', `transactions/payments/accounts/${accountKey}`, requestOptions)
};

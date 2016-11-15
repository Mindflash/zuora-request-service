/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('transactions', function() {
  let idStub;
  let requestStub;
  let transactions;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'someValue'};

    transactions = proxyquire('../transactions', {
      './proxied-request': requestStub
    });
  });

  it('getInvoices calls proxy request with the correct paramaters', function() {
    transactions.getInvoices(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'transactions/invoices/accounts/1234', requestOptionsStub);
  });

  it('getPayments calls proxy request with the correct paramaters', function() {
    transactions.getPayments(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'transactions/payments/accounts/1234', requestOptionsStub);
  });
});

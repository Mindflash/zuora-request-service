/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('payment-methods', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let paymentMethods;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    paymentMethods = proxyquire('../payment-methods', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    paymentMethods.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'payment-methods/credit-cards', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    paymentMethods.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'payment-methods/credit-cards/accounts/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    paymentMethods.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'payment-methods/credit-cards/1234', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    paymentMethods.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'payment-methods/1234', requestOptionsStub);
  });
});

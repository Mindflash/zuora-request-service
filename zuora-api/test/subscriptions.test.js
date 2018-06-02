/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');


describe('subscriptions', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let subscriptions;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    subscriptions = proxyquire('../subscriptions', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    subscriptions.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'subscriptions', requestOptionsStub);
  });

  it('getByAccount calls proxy request with the correct paramaters', function() {
    subscriptions.getByAccount(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'subscriptions/accounts/1234', requestOptionsStub);
  });

  it('preview calls proxy request with the correct paramaters', function() {
    subscriptions.preview(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'subscriptions/preview', requestOptionsStub);
  });

  it('getByKey calls proxy request with the correct paramaters', function() {
    subscriptions.getByKey(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'subscriptions/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    subscriptions.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', `subscriptions/1234`, requestOptionsStub);
  });

  it('cancel calls proxy request with the correct paramaters', function() {
    subscriptions.cancel(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'subscriptions/1234/cancel', requestOptionsStub);
  });

  it('renew calls proxy request with the correct paramaters', function() {
    subscriptions.renew(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'subscriptions/1234/renew', requestOptionsStub);
  });

  it('resume calls proxy request with the correct paramaters', function() {
    subscriptions.resume(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'subscriptions/1234/resume', requestOptionsStub);
  });

  it('suspend calls proxy request with the correct paramaters', function() {
    subscriptions.suspend(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'subscriptions/1234/suspend', requestOptionsStub);
  });
});

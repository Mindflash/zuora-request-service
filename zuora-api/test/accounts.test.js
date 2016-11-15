/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('accounts', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let accounts;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    accounts = proxyquire('../accounts', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    accounts.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'accounts', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    accounts.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounts/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    accounts.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounts/1234', requestOptionsStub);
  });

  it('summary calls proxy request with the correct paramaters', function() {
    accounts.summary(idStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounts/1234/Summary');
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('accounting codes', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let accountingCodes;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    accountingCodes = proxyquire('../accounting-codes', {
      './proxied-request': requestStub
    });
  });

  it('list calls proxy request with the correct paramaters', function() {
    accountingCodes.list(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounting-codes', requestOptionsStub);
  });

  it('create calls proxy request with the correct paramaters', function() {
    accountingCodes.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'accounting-codes', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    accountingCodes.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'accounting-codes/1234', requestOptionsStub);
  });

  it('query calls proxy request with the correct paramaters', function() {
    accountingCodes.query(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounting-codes/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    accountingCodes.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-codes/1234', requestOptionsStub);
  });

  it('activate calls proxy request with the correct paramaters', function() {
    accountingCodes.activate(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-codes/1234/activate', requestOptionsStub);
  });

  it('deactivate calls proxy request with the correct paramaters', function() {
    accountingCodes.deactivate(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-codes/1234/deactivate', requestOptionsStub);
  });
});

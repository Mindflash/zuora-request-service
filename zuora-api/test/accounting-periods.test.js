/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('accounting periods', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let accountingPeriods;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    accountingPeriods = proxyquire('../accounting-periods', {
      './proxied-request': requestStub
    });
  });

  it('list calls proxy request with the correct paramaters', function() {
    accountingPeriods.list(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounting-periods', requestOptionsStub);
  });

  it('create calls proxy request with the correct paramaters', function() {
    accountingPeriods.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'accounting-periods', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    accountingPeriods.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'accounting-periods/1234', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    accountingPeriods.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'accounting-periods/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    accountingPeriods.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-periods/1234', requestOptionsStub);
  });

  it('close calls proxy request with the correct paramaters', function() {
    accountingPeriods.close(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-periods/1234/close', requestOptionsStub);
  });

  it('pending calls proxy request with the correct paramaters', function() {
    accountingPeriods.pending(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-periods/1234/pending-close', requestOptionsStub);
  });

  it('reopen calls proxy request with the correct paramaters', function() {
    accountingPeriods.reopen(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-periods/1234/reopen', requestOptionsStub);
  });

  it('runTrial calls proxy request with the correct paramaters', function() {
    accountingPeriods.runTrial(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'accounting-periods/1234/run-trial-balance', requestOptionsStub);
  });
});

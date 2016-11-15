/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('journal runs', function() {
  let requestOptionsStub;
  let requestStub;
  let journalRuns;
  let idStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};
    idStub = 1234; // eslint-disable-line no-magic-numbers

    journalRuns = proxyquire('../journal-runs', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    journalRuns.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'journal-runs', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    journalRuns.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'journal-runs/1234', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    journalRuns.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'journal-runs/1234', requestOptionsStub);
  });

  it('cancel calls proxy request with the correct paramaters', function() {
    journalRuns.cancel(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'journal-runs/1234/cancel', requestOptionsStub);
  });
});

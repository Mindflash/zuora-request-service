/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('journal entries', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let journalEntries;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    journalEntries = proxyquire('../journal-entries', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    journalEntries.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'journal-entries', requestOptionsStub);
  });

  it('findByJournalRun calls proxy request with the correct paramaters', function() {
    journalEntries.findByJournalRun(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'journal-entries/journal-runs/1234', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    journalEntries.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'journal-entries/1234', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    journalEntries.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'journal-entries/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    journalEntries.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'journal-entries/1234/basic-information', requestOptionsStub);
  });

  it('cancel calls proxy request with the correct paramaters', function() {
    journalEntries.cancel(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'journal-entries/1234/cancel', requestOptionsStub);
  });
});

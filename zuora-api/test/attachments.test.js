/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('attachments', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let attachments;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    attachments = proxyquire('../attachments', {
      './proxied-request': requestStub
    });
  });

  it('add calls proxy request with the correct paramaters', function() {
    attachments.add(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'attachments', requestOptionsStub);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    attachments.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'attachments/1234', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    attachments.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'attachments/1234', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    attachments.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'attachments/1234', requestOptionsStub);
  });

  it('list calls proxy request with the correct paramaters', function() {
    attachments.list('account', 'accountKey', requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'attachments/account/accountKey', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('usage', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let usage;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    usage = proxyquire('../usage', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    usage.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'usage', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    usage.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'usage/accounts/1234', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('hmac signatures', function() {
  let requestOptionsStub;
  let requestStub;
  let hmacSignatures;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    hmacSignatures = proxyquire('../hmac-signatures', {
      './proxied-request': requestStub
    });
  });

  it('create calls proxy request with the correct paramaters', function() {
    hmacSignatures.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'hmac-signatures', requestOptionsStub);
  });
});

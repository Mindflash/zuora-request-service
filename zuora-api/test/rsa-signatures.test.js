/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('rsa signatures', function() {
  let requestOptionsStub;
  let requestStub;
  let rsaSignatures;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    rsaSignatures = proxyquire('../rsa-signatures', {
      './proxied-request': requestStub
    });
  });

  it('generate calls proxy request with the correct paramaters', function() {
    rsaSignatures.generate(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'rsa-signatures', requestOptionsStub);
  });

  it('decrypt calls proxy request with the correct paramaters', function() {
    rsaSignatures.decrypt(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'rsa-signatures/decrypt', requestOptionsStub);
  });
});

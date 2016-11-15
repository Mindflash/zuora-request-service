/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('operations', function() {
  let requestOptionsStub;
  let requestStub;
  let operations;

  beforeEach(function() {
    requestStub = sinon.stub();
    operations = {value: 'somevalue'};

    operations = proxyquire('../operations', {
      './proxied-request': requestStub
    });
  });

  it('invoiceCollect calls proxy request with the correct paramaters', function() {
    operations.invoiceCollect(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'operations/invoice-collect', requestOptionsStub);
  });
});

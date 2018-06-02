/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');


describe('catalog', function() {
  let requestStub;
  let catalog;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    catalog = proxyquire('../catalog', {
      './proxied-request': requestStub
    });
  });

  it('list calls proxy request with the correct paramaters', function() {
    catalog.list(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'catalog/products', requestOptionsStub);
  });
});

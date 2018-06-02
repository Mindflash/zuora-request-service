/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */


'use strict';

const proxyquire = require('proxyquire');

describe('hosted pages', function() {
  let requestStub;
  let hostedPages;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'someValue'};

    hostedPages = proxyquire('../hosted-pages', {
      './proxied-request': requestStub
    });
  });

  it('list calls proxy request with the correct paramaters', function() {
    hostedPages.list(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'hostedpages', requestOptionsStub);
  });
});

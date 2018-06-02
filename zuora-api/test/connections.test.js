/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('connections', function() {
  let requestStub;
  let connections;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    connections = proxyquire('../connections', {
      './proxied-request': requestStub
    });
  });

  it('connect calls proxy request with the correct paramaters', function() {
    connections.connect(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'connections', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('get files', function() {
  let idStub;
  let requestStub;
  let files;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    files = proxyquire('../get-files', {
      './proxied-request': requestStub
    });
  });

  it('find calls proxy request with the correct paramaters', function() {
    files.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'files/1234', requestOptionsStub);
  });
});

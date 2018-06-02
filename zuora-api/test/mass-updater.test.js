/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('mass updater', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let massUpdater;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    massUpdater = proxyquire('../mass-updater', {
      './proxied-request': requestStub
    });
  });

  it('bulk calls proxy request with the correct paramaters', function() {
    massUpdater.bulk(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'bulk', requestOptionsStub);
  });

  it('find calls proxy request with the correct paramaters', function() {
    massUpdater.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'bulk/1234', requestOptionsStub);
  });

  it('stop calls proxy request with the correct paramaters', function() {
    massUpdater.stop(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'bulk/1234/stop', requestOptionsStub);
  });
});

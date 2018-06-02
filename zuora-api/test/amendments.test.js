/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('amendments', function() {
  let idStub;
  let requestStub;
  let amendments;
  let requestOptionsStub;


  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    amendments = proxyquire('../amendments', {
      './proxied-request': requestStub
    });
  });

  it('bySubscriptionId calls proxy request with the correct paramaters', function() {
    amendments.bySubscriptionId(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'amendments/subscriptions/1234', requestOptionsStub);
  });

  it('byAmendmentKey calls proxy request with the correct paramaters', function() {
    amendments.byAmendmentKey(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'amendments/1234', requestOptionsStub);
  });
});

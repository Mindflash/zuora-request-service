/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');


describe('catalog', function() {
  let requestStub;
  let revenueSummaries;
  let idStub;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    revenueSummaries = proxyquire('../charge-revenue-summaries', {
      './proxied-request': requestStub
    });
  });

  it('byChargeId calls proxy request with the correct paramaters', function() {
    revenueSummaries.byChargeId(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'charge-revenue-summaries/subscription-charges/1234', requestOptionsStub);
  });

  it('byCrsNumber calls proxy request with the correct paramaters', function() {
    revenueSummaries.byCrsNumber(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'charge-revenue-summaries/1234', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('revenue items', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let revenueItems;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    revenueItems = proxyquire('../revenue-items', {
      './proxied-request': requestStub
    });
  });

  it('getBySummary calls proxy request with the correct paramaters', function() {
    revenueItems.getBySummary(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-items/charge-revenue-summaries/1234', requestOptionsStub);
  });

  it('getByEvent calls proxy request with the correct paramaters', function() {
    revenueItems.getByEvent(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-items/revenue-events/1234', requestOptionsStub);
  });

  it('updateByEvent calls proxy request with the correct paramaters', function() {
    revenueItems.updateByEvent(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-items/revenue-events/1234', requestOptionsStub);
  });

  it('getBySchedule calls proxy request with the correct paramaters', function() {
    revenueItems.getBySchedule(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-items/revenue-schedules/1234', requestOptionsStub);
  });

  it('updateBySchedule calls proxy request with the correct paramaters', function() {
    revenueItems.updateBySchedule(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-items/revenue-schedules/1234', requestOptionsStub);
  });
});

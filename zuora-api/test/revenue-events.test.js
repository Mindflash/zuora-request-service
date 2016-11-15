/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('revenue events', function() {
  let idStub;
  let requestStub;
  let revenueEvents;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    revenueEvents = proxyquire('../revenue-events', {
      './proxied-request': requestStub
    });
  });

  it('find calls proxy request with the correct paramaters', function() {
    revenueEvents.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-events/revenue-schedules/1234', requestOptionsStub);
  });

  it('details calls proxy request with the correct paramaters', function() {
    revenueEvents.details(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-events/1234', requestOptionsStub);
  });
});

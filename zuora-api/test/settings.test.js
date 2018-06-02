/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('settings', function() {
  let requestStub;
  let settings;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'someValue'};

    settings = proxyquire('../settings', {
      './proxied-request': requestStub
    });
  });

  it('settings calls proxy request with the correct paramaters', function() {
    settings.startDate(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'settings/finance/revenue-automation-start-date', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('revenue rules', function() {
  let idStub;
  let requestStub;
  let revenueRules;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'someValue'};

    revenueRules = proxyquire('../revenue-rules', {
      './proxied-request': requestStub
    });
  });

  it('find calls proxy request with the correct paramaters', function() {
    revenueRules.find(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-recognition-rules/subscription-charges/1234', requestOptionsStub);
  });
});

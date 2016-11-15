/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, no-magic-numbers: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('zuora-api', function() {
  let subscriptionsStub;
  let objectStub;
  let zuoraApi;

  beforeEach(function() {
    subscriptionsStub = sinon.stub();
    objectStub = sinon.stub();

    zuoraApi = proxyquire('../index.js', {
      './subscriptions': subscriptionsStub,
      './zuora-object-resource': objectStub
    });
  });

  it('returns an object', function() {
    expect(zuoraApi).to.include.keys('subscriptions', 'object');
  });
});

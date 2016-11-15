/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('notification history', function() {
  let requestStub;
  let notificationHistory;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'someValue'};

    notificationHistory = proxyquire('../notification-history', {
      './proxied-request': requestStub
    });
  });

  it('callout calls proxy request with the correct paramaters', function() {
    notificationHistory.callout(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'notification-history/callout', requestOptionsStub);
  });

  it('email calls proxy request with the correct paramaters', function() {
    notificationHistory.email(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'notification-history/email', requestOptionsStub);
  });
});

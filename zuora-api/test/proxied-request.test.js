/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, no-magic-numbers: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('proxied request', function() {
  let niceStub;
  let proxiedRequest;
  let configStub;

  beforeEach(function() {
    niceStub = {
      request: sinon.stub()
    };

    configStub = {
      baseUrl: sinon.stub().returns('base-url'),
      headers: sinon.stub().returns({
        apiaccesskeyid: 'someId',
        apisecretaccesskey: 'someKey'
      })
    };

    proxiedRequest = proxyquire('../proxied-request', {
      'nice-request': niceStub,
      '../zoura-config': configStub
    });
  });

  it('calls nice request with the right options', function() {
    niceStub.request.resolves({success: true});
    proxiedRequest('GET', 'object/subscriptions/1234');
    expect(niceStub.request).to.have.been.calledWithExactly({
      headers: {
        apiaccesskeyid: 'someId',
        apisecretaccesskey: 'someKey'
      },
      method: 'GET',
      metricTag: 'object/subscriptions/1234',
      url: 'base-url/object/subscriptions/1234'
    });
  });

  it('correctly attaches a payload to the request options', function() {
    niceStub.request.resolves({success: true});
    proxiedRequest('POST', 'attachments', {
      requestOptions: {value: 'someValue'},
      queryString: {thingOne: 'someValue'}
    });
    expect(niceStub.request).to.have.been.calledWithExactly({
      headers: {
        apiaccesskeyid: 'someId',
        apisecretaccesskey: 'someKey'
      },
      method: 'POST',
      metricTag: 'attachments',
      url: 'base-url/attachments',
      requestOptions: {value: 'someValue'},
      queryString: {thingOne: 'someValue'}
    });
  });

  it('throws responses with success marked false', function() {
    niceStub.request.resolves({success: false});
    expect(proxiedRequest('object', 'subscriptions', 'GET', {}, 1234)).to.be.rejected;
  });

  it('resolves a promise when success is marked true', function() {
    niceStub.request.resolves({success: true});
    expect(proxiedRequest('object', 'GET', 'subscriptions', {}, 1234)).to.be.fullfilled;
  });

  it('resolves a promise when there is no success property', function() {
    niceStub.request.resolves({values: 'things'});
    expect(proxiedRequest('object', 'GET', 'subscriptions', {}, 1234)).to.become({values: 'things'});
  });
});

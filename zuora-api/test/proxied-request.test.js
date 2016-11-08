/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, no-magic-numbers: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('proxied request', function() {
  let niceStub;
  let proxiedRequest;
  let requestOptions;

  beforeEach(function() {
    niceStub = {
      request: sinon.stub()
    };

    requestOptions = {
      url: 'someUrl',
      method: 'someMethod'
    }

    proxiedRequest = proxyquire('../proxied-request', {
      'nice-request': niceStub
    });
  });

  it('calls nice request with the right options', function() {
    niceStub.request.resolves({success:true});
    proxiedRequest(requestOptions);
    expect(niceStub.request).to.have.been.calledWithExactly(requestOptions)
  });

  it('throws responses with success marked false', function() {
    niceStub.request.resolves({success:false});
    expect(proxiedRequest(requestOptions)).to.be.rejected;
  });

  it('resolves a promise when success is marked true', function() {
    niceStub.request.resolves({success:true});
    expect(proxiedRequest(requestOptions)).to.be.fullfilled;
  });

  it('resolves a promise when there is no success property', function() {
    niceStub.request.resolves({values:'things'});
    expect(proxiedRequest(requestOptions)).to.become({values:'things'});
  })
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('zuora object resource', function() {
  let idStub;
  let zuoraObject;
  let requestStub;
  let requestOptionsStub;

  beforeEach(function() {
    requestStub = sinon.stub();

    idStub = 1234; // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'someValue'};

    zuoraObject = proxyquire('../zuora-object-resource', {'./proxied-request': requestStub});
  });

  it('find calls proxy request with the right params', function() {
    zuoraObject.find('subscriptions', idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'object/subscriptions/1234', requestOptionsStub);
  });

  it('post calls proxy request with the right params', function() {
    zuoraObject.create('subscriptions', requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'object/subscriptions', requestOptionsStub);
  });

  it('delete calls proxy request with the right params', function() {
    zuoraObject.delete('subscriptions', idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'object/subscriptions/1234', requestOptionsStub);
  });

  it('put calls proxy request with the right params', function() {
    zuoraObject.update('subscriptions', idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'object/subscriptions/1234', requestOptionsStub);
  });
});

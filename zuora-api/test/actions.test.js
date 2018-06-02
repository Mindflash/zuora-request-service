/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');
const set = require('lodash/set');

const lowerLimit = 11;
const higherLimit = 51;

describe('actions', function() {
  let requestOptionsStub;
  let requestStub;
  let actions;

  beforeEach(function() {
    requestStub = sinon.stub();
    requestOptionsStub = {value: 'somevalue'};

    actions = proxyquire('../actions', {
      './proxied-request': requestStub
    });
  });

  afterEach(function() {
    requestOptionsStub = {value: 'somevalue'};
  });

  it('amend calls proxy request with the correct paramaters', function() {
    actions.amend(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/amend', requestOptionsStub);
  });

  it('amend throws a range error when more than 10 objects are supplied in the requestOptions object', function() {
    set(requestOptionsStub, 'requests', new Array(lowerLimit));

    expect(function() {
      actions.amend(requestOptionsStub);
    }).to.throw(RangeError);
  });

  it('create calls proxy request with the correct paramaters', function() {
    actions.create(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/create', requestOptionsStub);
  });

  it('create throws a range error when more than 50 objects are supplied in the requestOptions object', function() {
    set(requestOptionsStub, 'objects', new Array(higherLimit));

    expect(function() {
      actions.create(requestOptionsStub);
    }).to.throw(RangeError);
  });

  it('delete calls proxy request with the correct paramaters', function() {
    actions.delete(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/delete', requestOptionsStub);
  });

  it('delete throws a range error when more than 50 objects are supplied in the requestOptions object', function() {
    set(requestOptionsStub, 'ids', new Array(higherLimit));

    expect(function() {
      actions.delete(requestOptionsStub);
    }).to.throw(RangeError);
  });

  it('execute calls proxy request with the correct paramaters', function() {
    actions.execute(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/execute', requestOptionsStub);
  });

  it('generate calls proxy request with the correct paramaters', function() {
    actions.generate(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/generate', requestOptionsStub);
  });

  it('query calls proxy request with the correct paramaters', function() {
    actions.query(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/query', requestOptionsStub);
  });

  it('queryMore calls proxy request with the correct paramaters', function() {
    actions.queryMore(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/queryMore', requestOptionsStub);
  });

  it('subscribe calls proxy request with the correct paramaters', function() {
    actions.subscribe(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/subscribe', requestOptionsStub);
  });

  it('update calls proxy request with the correct paramaters', function() {
    actions.update(requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'action/update', requestOptionsStub);
  });
});

/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0 */
'use strict';

const nock = require('nock');
const zuora = require('./index.js');

const SUCCESS = 200;

describe('zoura service', function() {
  let loggerStub;
  let keyId;
  let accessKey;

  beforeEach(function() {
    loggerStub = {
      info: sinon.spy()
    };
    keyId = 'someKeyId';
    accessKey = 'someAccessKey';
    zuora.setup(keyId, accessKey, loggerStub);
  });

  afterEach(function() {
    zuora.setup(null, null, null);
  });

  it('allows the user to interact with any zuora object', function() {
    const responseStub = {success: true, nested: [{value: 'nested value'}]};
    const scope = nock('https://rest.apisandbox.zuora.com/v1')
    .get('/object/product/1234')
    .reply(SUCCESS, responseStub);

    return zuora.api().object.find('product', 1234).then(res => {
      scope.done();
      expect(res).to.deep.equal(responseStub);
    });
  });

  it('adds authorization headers to the request', function() {
    const responseStub = {success: true, nested: [{value: 'nested value'}]};
    const scope = nock('https://rest.apisandbox.zuora.com/v1', {
      reqheaders: {
        apiaccesskeyid: 'someKeyId',
        apisecretaccesskey: 'someAccessKey',
        'content-Type': 'application/json'
      }
    })
    .get('/object/product/1234')
    .reply(SUCCESS, responseStub);

    return zuora.api().object.find('product', 1234).then(res => {
      scope.done();
      expect(res).to.deep.equal(responseStub);
    });
  });

  it('when success is marked false the result is thrown as an error', function() {
    const responseStub = {success: false, nested: [{value: 'nested value'}]};

    const scope = nock('https://rest.apisandbox.zuora.com/v1')
    .get('/object/product/1234')
    .reply(SUCCESS, responseStub);

    return zuora.api().object.find('product', 1234).catch(res => {
      scope.done();
      expect(res).to.deep.equal(responseStub);
    });
  });

  it('correctly uses and applies query strings to the uri', function() {
    const responseStub = {success: true, nested: [{value: 'nested value'}]};
    const scope = nock('https://rest.apisandbox.zuora.com/v1', {
      reqheaders: {
        apiaccesskeyid: 'someKeyId',
        apisecretaccesskey: 'someAccessKey',
        'content-Type': 'application/json'
      }
    })
    .post('/attachments', {
      file: 'someRequestBodyData'
    })
    .query({
      description: 'some description',
      associatedObjectType: 'Account',
      associatedObjectKey: 'someKey'
    })
    .reply(SUCCESS, responseStub);

    const requestOptions = {
      body: {
        file: 'someRequestBodyData'
      },
      queryString: {
        description: 'some description',
        associatedObjectType: 'Account',
        associatedObjectKey: 'someKey'
      }
    }

    return zuora.api().attachments.add(requestOptions).then(res => {
      expect(res).to.deep.equal(responseStub);
      scope.done();
    });
  });
});

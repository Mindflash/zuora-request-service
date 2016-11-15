/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0, global-require: 0 */

'use strict';

describe('zuora-config', function() {
  let accessIdStub;
  let secretKeyStub;
  let headersStub;
  let config;

  beforeEach(function() {
    accessIdStub = 'someId';
    secretKeyStub = 'someKey';


    headersStub = {
      apiaccesskeyid: accessIdStub,
      apisecretaccesskey: secretKeyStub,
      'content-Type': 'application/json'
    };

    config = require('./zoura-config');
  });

  it('throws an error when apiaccesskeyid is null', function() {
    expect(function() {
      config.headers();
    }).to.throw(TypeError);
  });

  it('throws an error when apisecretaccesskey is null', function() {
    expect(function() {
      config.headers();
    }).to.throw(TypeError);
  });

  it('sets baseUrl to prod when isProd evaluates to true', function() {
    config.setup(accessIdStub, secretKeyStub, true);
    expect(config.baseUrl()).to.equal('https://rest.zuora.com/v1');
  });

  it('sets baseUrl to sandbox when isProd evaluates to false', function() {
    config.setup(accessIdStub, secretKeyStub, false);
    expect(config.baseUrl()).to.equal('https://rest.apisandbox.zuora.com/v1');
  });

  it('returns the headers object when apiaccesskeyid and apisecretaccesskey are set', function() {
    config.setup(accessIdStub, secretKeyStub, false);
    expect(config.headers()).to.deep.equal(headersStub);
  });
});

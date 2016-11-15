/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, no-magic-numbers: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('zuora request service', function() {
  let niceStub;
  let zouraApiStub;
  let keyIdStub;
  let accessKeyStub;
  let logStub;
  let isProdStub;
  let zuora;
  let configStub;

  beforeEach(function() {
    keyIdStub = 'someKeyId';
    accessKeyStub = 'someAccessKey';

    niceStub = {
      setup: sinon.spy()
    };

    configStub = {
      setup: sinon.stub()
    };

    zouraApiStub = sinon.spy();
    logStub = 'some logger';
    isProdStub = false;

    zuora = proxyquire('./index.js', {
      'nice-request': niceStub,
      './zuora-api': zouraApiStub,
      './zoura-config': configStub
    });
  });

  afterEach(function() {
    zuora.setup(null, null, null, null);
  });

  context('setup()', function() {
    it('is a function', function() {
      expect(zuora.setup).to.be.a('function');
    });

    it('is callable and returns nothihng', function() {
      expect(zuora.setup()).to.be.undefined;
    });

    it('calls nice.setup with the correct paramaters', function() {
      zuora.setup(keyIdStub, accessKeyStub, logStub, isProdStub);
      expect(niceStub.setup).to.have.been.calledWith('zuora-service', logStub);
    });

    it('calls config.setup with the correct parameters', function() {
      zuora.setup(keyIdStub, accessKeyStub, logStub, isProdStub);
      expect(configStub.setup).to.have.been.calledWith(keyIdStub, accessKeyStub, isProdStub);
    });
  });

  context('api()', function() {
    it('is a function', function() {
      expect(zuora.api).to.be.a('function');
    });
  });
});

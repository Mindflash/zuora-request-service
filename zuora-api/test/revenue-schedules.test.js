/* eslint no-unused-expressions: 0, init-declarations: 0, prefer-arrow-callback: 0, func-names: 0, max-statements: 0 */

'use strict';

const proxyquire = require('proxyquire');

describe('revenue subscriptions', function() {
  let idStub;
  let requestOptionsStub;
  let requestStub;
  let revenueSubscriptions;

  beforeEach(function() {
    requestStub = sinon.stub();
    idStub = 1234;  // eslint-disable-line no-magic-numbers
    requestOptionsStub = {value: 'somevalue'};

    revenueSubscriptions = proxyquire('../revenue-schedules', {
      './proxied-request': requestStub
    });
  });

  it('getByInvoiceItemAdjustment calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.getByAdjustment(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-schedules/invoice-item-adjustments/1234', requestOptionsStub);
  });

  it('createAdjustmentManual calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.createAdjustment(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'revenue-schedules/invoice-item-adjustments/1234', requestOptionsStub);
  });

  it('createAdjustmentDate calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.createAdjustmentByRange(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'revenue-schedules/invoice-item-adjustments/1234/distribute-revenue-with-date-range', requestOptionsStub);
  });

  it('getScheduleByInvoiceItem calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.getByInvoiceItem(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', 'revenue-schedules/invoice-items/1234', requestOptionsStub);
  });

  it('createScheduleForInvoiceItem calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.createForInvoiceItem(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'revenue-schedules/invoice-items/1234', requestOptionsStub);
  });

  it('createScheduleForInvoiceItemByRange calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.createForInvoiceItemByRange(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'revenue-schedules/invoice-items/1234/distribute-revenue-with-date-range', requestOptionsStub);
  });

  it('getScheduleBySubscription calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.getBySubscription(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', `revenue-schedules/subscription-charges/1234`, requestOptionsStub);
  });

  it('createBySubscription calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.createBySubscription(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('POST', 'revenue-schedules/subscription-charges/1234', requestOptionsStub);
  });

  it('deleteSchedule calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.delete(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('DELETE', 'revenue-schedules/1234', requestOptionsStub);
  });

  it('getScheduleDetails calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.getDetails(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('GET', `revenue-schedules/1234`, requestOptionsStub);
  });

  it('updateScheduleBasic calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.update(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-schedules/1234/basic-information', requestOptionsStub);
  });

  it('distributeRevenueAcrossAccountingPeriods calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.distributeByPeriods(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-schedules/1234/distribute-revenue-across-accounting-periods', requestOptionsStub);
  });

  it('distributeRevenueOnASpecificDate calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.distributeByDate(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-schedules/1234/distribute-revenue-on-specific-date', requestOptionsStub);
  });

  it('distributeReeveneueWithStartEnd calls proxy request with the correct paramaters', function() {
    revenueSubscriptions.distributeByRange(idStub, requestOptionsStub);
    expect(requestStub).to.have.been.calledWithExactly('PUT', 'revenue-schedules/1234/distribute-revenue-with-date-range', requestOptionsStub);
  });
});

'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-id}/
  getByAdjustment: (invoiceItemAdjId, requestOptions) => request('GET', `revenue-schedules/invoice-item-adjustments/${invoiceItemAdjId}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}
  createAdjustment: (invoiceItemAdjKey, requestOptions) => request('POST', `revenue-schedules/invoice-item-adjustments/${invoiceItemAdjKey}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/invoice-item-adjustments/{invoice-item-adj-key}/distribute-revenue-with-date-range
  createAdjustmentByRange: (invoiceItemAdjId, requestOptions) => request('POST', `revenue-schedules/invoice-item-adjustments/${invoiceItemAdjId}/distribute-revenue-with-date-range`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/invoice-items/{invoice-item-id}
  getByInvoiceItem: (invoiceItemId, requestOptions) => request('GET', `revenue-schedules/invoice-items/${invoiceItemId}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/invoice-items/{invoice-item-id}
  createForInvoiceItem: (invoiceItemId, requestOptions) => request('POST', `revenue-schedules/invoice-items/${invoiceItemId}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/invoice-items/{invoice-item-id}/distribute-revenue-with-date-range
  createForInvoiceItemByRange: (invoiceItemId, requestOptions) => request('POST', `revenue-schedules/invoice-items/${invoiceItemId}/distribute-revenue-with-date-range`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/subscription-charges/{charge-key}
  getBySubscription: (chargeKey, requestOptions) => request('GET', `revenue-schedules/subscription-charges/${chargeKey}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/subscription-charges/{charge-key}
  createBySubscription: (chargeKey, requestOptions) => request('POST', `revenue-schedules/subscription-charges/${chargeKey}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}
  delete: (rsNumber, requestOptions) => request('DELETE', `revenue-schedules/${rsNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}
  getDetails: (rsNumber, requestOptions) => request('GET', `revenue-schedules/${rsNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}/basic-information
  update: (rsNumber, requestOptions) => request('PUT', `revenue-schedules/${rsNumber}/basic-information`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}/distribute-revenue-across-accounting-periods
  distributeByPeriods: (rsNumber, requestOptions) => request('PUT', `revenue-schedules/${rsNumber}/distribute-revenue-across-accounting-periods`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}/distribute-revenue-on-specific-date
  distributeByDate: (rsNumber, requestOptions) => request('PUT', `revenue-schedules/${rsNumber}/distribute-revenue-on-specific-date`, requestOptions),

  // https://rest.zuora.com/v1/revenue-schedules/{rs-number}/distribute-revenue-with-date-range
  distributeByRange: (rsNumber, requestOptions) => request('PUT', `revenue-schedules/${rsNumber}/distribute-revenue-with-date-range`, requestOptions)
};

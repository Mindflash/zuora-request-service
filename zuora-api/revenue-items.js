'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/revenue-items/charge-revenue-summaries/{crs-number}
  getBySummary: (crsNumber, requestOptions) => request('GET', `revenue-items/charge-revenue-summaries/${crsNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-items/revenue-events/{event-number}
  getByEvent: (eventNumber, requestOptions) => request('GET', `revenue-items/revenue-events/${eventNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-items/revenue-events/{event-number}
  updateByEvent: (eventNumber, requestOptions) => request('PUT', `revenue-items/revenue-events/${eventNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-items/revenue-schedules/{rs-number}
  getBySchedule: (rsNumber, requestOptions) => request('GET', `revenue-items/revenue-schedules/${rsNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-items/revenue-schedules/{rs-number}
  updateBySchedule: (rsNumber, requestOptions) => request('PUT', `revenue-items/revenue-schedules/${rsNumber}`, requestOptions)
};

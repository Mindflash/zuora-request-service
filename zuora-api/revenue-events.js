'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/revenue-events/revenue-schedules/{rs-number}
  find: (rsNumber, requestOptions) => request('GET', `revenue-events/revenue-schedules/${rsNumber}`, requestOptions),

  // https://rest.zuora.com/v1/revenue-events/{event-number}
  details: (eventNumber, requestOptions) => request('GET', `revenue-events/${eventNumber}`, requestOptions)
};

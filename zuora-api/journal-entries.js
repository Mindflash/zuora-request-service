'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/journal-entries
  create: requestOptions => request('POST', 'journal-entries', requestOptions),

  // https://rest.zuora.com/v1/journal-entries/journal-runs/{jr-number}
  findByJournalRun: (jrNumber, requestOptions) => request('GET', `journal-entries/journal-runs/${jrNumber}`, requestOptions),

  // https://rest.zuora.com/v1/journal-entries/{je-number}
  delete: (jrNumber, requestOptions) => request('DELETE', `journal-entries/${jrNumber}`, requestOptions),

  // https://rest.zuora.com/v1/journal-entries/{je-number}
  find: (jeNumber, requestOptions) => request('GET', `journal-entries/${jeNumber}`, requestOptions),

  // https://rest.zuora.com/v1/journal-entries/{je-number}/basic-information
  update: (jeNumber, requestOptions) => request('PUT', `journal-entries/${jeNumber}/basic-information`, requestOptions),

  // https://rest.zuora.com/v1/journal-entries/{je-number}/cancel
  cancel: (jeNumber, requestOptions) => request('PUT', `journal-entries/${jeNumber}/cancel`, requestOptions)
};

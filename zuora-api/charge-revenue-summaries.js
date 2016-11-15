'use strict';

const request = require('./proxied-request');

module.exports = {

  // https://rest.zuora.com/v1/charge-revenue-summaries/subscription-charges/{charge-key}
  byChargeId: (chargeKey, requestOptions) => request('GET', `charge-revenue-summaries/subscription-charges/${chargeKey}`, requestOptions),

  // https://rest.zuora.com/v1/charge-revenue-summaries/{crs-number}
  byCrsNumber: (crsNumber, requestOptions) => request('GET', `charge-revenue-summaries/${crsNumber}`, requestOptions)
};

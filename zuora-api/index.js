'use strict';

const accountingCodes = require('./accounting-codes');
const accountingPeriods = require('./accounting-periods');
const accounts = require('./accounts');
const actions = require('./actions');
const amendments = require('./amendments');
const attachments = require('./attachments');
const catalog = require('./catalog');
const chargeRevenueSummaries = require('./charge-revenue-summaries');
const connections = require('./connections');
const getFiles = require('./get-files');
const hmacSignatures = require('./hmac-signatures');
const hostedPages = require('./hosted-pages');
const journalEntries = require('./journal-entries');
const journalRuns = require('./journal-runs');
const massUpdater = require('./journal-entries');
const notificationHistory = require('./notification-history');
const operations = require('./operations');
const paymentMethods = require('./payment-methods');
const quotesDocument = require('./quotes-document');
const revenueEvents = require('./revenue-events');
const revenueItems = require('./revenue-items');
const revenueRules = require('./revenue-rules');
const revenueSchedules = require('./revenue-schedules');
const rsaSignatures = require('./rsa-signatures');
const settings = require('./settings');
const subscriptions = require('./subscriptions');
const transactions = require('./transactions');
const usage = require('./usage');
const object = require('./zuora-object-resource');

module.exports = {
  accounting: {
    codes: accountingCodes,
    periods: accountingPeriods
  },
  accounts,
  actions,
  amendments,
  attachments,
  catalog,
  chargeRevenueSummaries,
  connections,
  getFiles,
  hmacSignatures,
  hostedPages,
  journal: {
    entries: journalEntries,
    runs: journalRuns
  },
  massUpdater,
  notificationHistory,
  operations,
  paymentMethods,
  quotesDocument,
  revenue: {
    events: revenueEvents,
    items: revenueItems,
    rules: revenueRules,
    schedules: revenueSchedules
  },
  rsaSignatures,
  settings,
  subscriptions,
  transactions,
  usage,
  object
};

# Zuora Request Service

Zuora Request Service is a promise based library that facilitates interaction with the [zuora](https://www.zuora.com/developer/api-reference/#tag/HMAC%20Signatures) http API.
This service provides several conveniences for using the zuora api:
+ Automatically append auth and content type headers to every out going request,
+ Manages all the URL's for the zuora api.
+ Intercepts errors returned from zuora as 200's and automatically rethrows them as proper errors.
+ Configure requests to retry under specific conditions.
+ Can handle logging your interactions out with zuora.
+ Configurable time out feature on your requests to keep your processes from hanging if zuora becomes unresponsive.

## API

* **setup**( )

The setup method should be invoked when your server is being initialized with these arguments:
* keyId: your zuora supplied apiAccessKeyId
* accessKey: your zuora supplied apiSecretAccessKey
* isProd: boolean - boolean indicating if the code is in production environment or not. Controls the base URL for zuora.  
* logger: optional - an object with a .info function for logging.


```javascript

const zuora = require('zuora-service');
zuora.setup('dummyUser', 'dummyPassword', false, yourLogger);

```

* **api**( )

Every method accepts a request options object that can be used to configure the out going request to your needs.

request options object properties:

  + body: object -  required for requests that need to send a message body, PUT/POST calls.
  + queryString: object - optional, pass key value pairs on this object to be added to your http requests
  + timeout: number - optional, override timeout(ms). Default timeout is 25000 ms.
  + maxTries: number - optional*, specify the maximum number of retry attempts.
  + errCond: function - optional*, function that accepts an error object for evaluation and returns a boolean indicating if the request should be retried or not.

** maxTries and errCond cannot be used independently of each other. I.E if you set a max tries and do not pass a function to errCond no retries will be attempted.


```javascript
const requestOptions = {
  body: {
    some: 'amazing payload'
  },
  queryString: {
    description: 'some description',
    associatedObjectType: 'Account',
    associatedObjectKey: 'someKey'
  },
  timeout: 30000,
  maxTries: 15,
  errCond: error => error.status !== 200
};
```


* Accounting
  * codes
    * [list](https://www.zuora.com/developer/api-reference/#operation/GETAccountingCodes): `zuora.api().accounting.codes.list(requestOptions)`
    * [create](https://www.zuora.com/developer/api-reference/#operation/POST_AccountingCode): `zuora.api().accounting.codes.create(requestOptions)`
    * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_AccountingCode): `zuora.api().accounting.codes.delete(acId, requestOptions)`
    * [query](https://www.zuora.com/developer/api-reference/#operation/GETAccountingCodeItem): `zuora.api().accounting.codes.query(acId, requestOptions)`
    * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_AccountingCode): `zuora.api().accounting.codes.update(acId, requestOptions)`
    * [activate](https://www.zuora.com/developer/api-reference/#operation/PUT_ActivateAccountingCode): `zuora.api().accounting.codes.activate(acId, requestOptions)`
    * [deactivate](https://www.zuora.com/developer/api-reference/#operation/PUT_DeactivateAccountingCode): `zuora.api().accounting.codes.deactivate(acId, requestOptions)`
  * periods
    * [list](https://www.zuora.com/developer/api-reference/#operation/GETAccountingPeriods): `zuora.api().accounting.periods.list(requestOptions)`
    * [create](https://www.zuora.com/developer/api-reference/#operation/POST_AccountingPeriod): `zuora.api().accounting.periods.create(requestOptions)`
    * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_AccountingPeriod): `zuora.api().accounting.periods.delete(apId, requestOptions)`
    * [find](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod): `zuora.api().accounting.periods.find(apId, requestOptions)`
    * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_UpdateAccountingPeriod): `zuora.api().accounting.periods.update(apId, requestOptions)`
    * [close](https://www.zuora.com/developer/api-reference/#operation/PUT_CloseAccountingPeriod): `zuora.api().accounting.periods.close(apId, requestOptions)`
    * [pending](https://www.zuora.com/developer/api-reference/#operation/PUT_PendingCloseAccountingPeriod): `zuora.api().accounting.periods.pending(apId, requestOptions)`
    * [reopen](https://www.zuora.com/developer/api-reference/#operation/PUT_ReopenAccountingPeriod): `zuora.api().accounting.periods.reopen(apId, requestOptions)`
    * [runTrial](https://www.zuora.com/developer/api-reference/#operation/PUT_ReopenAccountingPeriod): `zuora.api().accounting.periods.runTrial(apId, requestOptions)`
* accounts
  * [create](https://www.zuora.com/developer/api-reference/#operation/POST_Account): `zuora.api().accounts.create(requestOptions)`
  * [find](https://www.zuora.com/developer/api-reference/#operation/GET_Account): `zuora.api().accounts.find(accountKey, requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_Account): `zuora.api().accounts.update(accountKey, requestOptions)`
  * [summary](https://www.zuora.com/developer/api-reference/#operation/GET_AccountSummary): `zuora.api().accounts.summary(accountKey, requestOptions)`
* actions
  * [amend](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTamend): `zuora.api().actions.amend(requestOptions)`
  * [create](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTcreate): `zuora.api().actions.create(requestOptions)`
  * [delete](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTdelete): `zuora.api().actions.delete(requestOptions)`
  * [execute](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTexecute): `zuora.api().actions.execute(requestOptions)`
  * [generate](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTgenerate): `zuora.api().actions.generate(requestOptions)`
  * [query](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTquery): `zuora.api().actions.query(requestOptions)`
  * [queryMore](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTqueryMore): `zuora.api().actions.queryMore(requestOptions)`
  * [subscribe](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTsubscribe): `zuora.api().actions.subscribe(requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/ProxyActionPOSTupdate): `zuora.api().actions.update(requestOptions)`
* amendments
  * [bySubscriptionId](https://www.zuora.com/developer/api-reference/#operation/GET_AmendmentsBySubscriptionID): `zuora.api().amendments.bySubscriptionId(subscriptionId, requestOptions)`
  * [byAmendmentKey](https://www.zuora.com/developer/api-reference/#operation/GETAmendment): `zuora.api().amendments.byAmendmentKey(amendmentKey, requestOptions)`
* attachments
  * [add](https://www.zuora.com/developer/api-reference/#operation/POST_Attachments): `zuora.api().attachments.add(requestOptions)`
  * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_Attachments): `zuora.api().attachments.delete(attachmentId, requestOptions)`
  * [find](https://www.zuora.com/developer/api-reference/#operation/GETAttachments): `zuora.api().attachments.find(attachmentId, requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_Attachments): `zuora.api().attachments.update(attachmentId, requestOptions)`
  * [list](https://www.zuora.com/developer/api-reference/#operation/GETAttachmentsResponse): `zuora.api().attachments.list(type, key, requestOptions)`
* catalog
  * [list](https://www.zuora.com/developer/api-reference/#operation/GETAttachmentsResponse): `zuora.api().catalog.list(requestOptions)`
* chargeRevenueSummaries
  * [byChargeId](https://www.zuora.com/developer/api-reference/#operation/GET_CRSByChargeID): `zuora.zpi().chargeRevenueSummaries.byChargeId(chargeKey, requestOptions)`
  * [byCrsNumber](https://www.zuora.com/developer/api-reference/#operation/GET_CRSByCRSNumber): `zuora.zpi().chargeRevenueSummaries.byCrsNumber(crsNumber, requestOptions)`
* connections
  * [connect](https://www.zuora.com/developer/api-reference/#operation/POST_Connections): `zuora.api().connections.connect(requestOptions)`
* getFiles
  * [find](https://www.zuora.com/developer/api-reference/#operation/GET_Files): `zuora.api().getFiles.find(fileId, requestOptions)`
* hmacSignatures
  * [create](https://www.zuora.com/developer/api-reference/#operation/GET_Files): `zuora.api().hmacSignatures.create(requestOptions)`
* hostedPages
  * [list](https://www.zuora.com/developer/api-reference/#tag/Hosted%20Pages): `zuora.api().hostedPages.list(requestOptions)`
* journal
  * entries
    * [create](https://www.zuora.com/developer/api-reference/#operation/POSTJournalEntry): `zuora.api().journal.entries.create(requestOptions)`
    * [findByJournalRun](https://www.zuora.com/developer/api-reference/#operation/GETJournalEntriesInJournalRun): `zuora.api().journal.entries.findByJournalRun(jrNumber, requestOptions)`
    * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_SummaryJournalEntry): `zuora.api().journal.entries.delete(jrNumber, requestOptions)`
    * [find](https://www.zuora.com/developer/api-reference/#operation/GETJournalEntryDetail): `zuora.api().journal.entries.find(jeNumber, requestOptions)`
    * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_BasicSummaryJournalEntry): `zuora.api().journal.entries.update(jeNumber, requestOptions)`
    * [cancel](https://www.zuora.com/developer/api-reference/#operation/PUT_SummaryJournalEntry): `zuora.api().journal.entries.cancel(jeNumber, requestOptions)`
  * runs
    * [create](https://www.zuora.com/developer/api-reference/#operation/POST_JournalRun): `zuora.api().journal.runs.create(requestOptions)`
    * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_JournalRun): `zuora.api().journal.runs.delete(jrNumber, requestOptions)`
    * [find](https://www.zuora.com/developer/api-reference/#operation/GET_JournalRun): `zuora.api().journal.runs.find(jrNumber, requestOptions)`
    * [cancel](https://www.zuora.com/developer/api-reference/#operation/PUT_JournalRun): `zuora.api().journal.runs.cancel(jrNumber, requestOptions)`
* massUpdater
  * [bulk](https://www.zuora.com/developer/api-reference/#operation/POSTMassUpdate): `zuora.api().massUpdater.bulk(requestOptions)`
  * [find](https://www.zuora.com/developer/api-reference/#operation/GETMassUpdate): `zuora.api().massUpdater.find(bulkKey, requestOptions)`
  * [stop](https://www.zuora.com/developer/api-reference/#operation/PUT_MassUpdater): `zuora.api().massUpdater.stop(bulkKey, requestOptions)`
* notificationHistory
  * [callout](https://www.zuora.com/developer/api-reference/#operation/GETCalloutHistoryVOs): `zuora.api().notificationHistory.callout(requestOptions)`
  * [email](https://www.zuora.com/developer/api-reference/#operation/GETEmailHistoryVOs): `zuora.api().notificationHistory.email(requestOptions)`
* operations
  * [invoiceCollect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment): `zuora.api().operations.invoiceCollect(requestOptions)`
* paymentMethods
  * [create](https://www.zuora.com/developer/api-reference/#operation/POSTPaymentMethod): `zuora.api().paymentMethods.create(requestOptions)`
  * [find](https://www.zuora.com/developer/api-reference/#operation/GET_PaymentMethods): `zuora.api().paymentMethods.find(accountKey, requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_PaymentMethods): `zuora.api().paymentMethods.update(paymentMethodId, requestOptions)`
  * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_PaymentMethods): `zuora.api().paymentMethods.delete(paymentMethodId, requestOptions)`
* quotesDocument
  * [document](https://www.zuora.com/developer/api-reference/#operation/POSTQuoteDoc): `zuora.api().quotesDocument.document(requestOptions)`
* revenue
  * events
    * [find](https://www.zuora.com/developer/api-reference/#tag/Revenue%20Events): `zuora.api().revenue.events.find(rsNumber, requestOptions)`
    * [details](https://www.zuora.com/developer/api-reference/#operation/GET_RevenueEventDetails): `zuora.api().revenue.events.details(eventNumber, requestOptions)`
  * items
    * [getBySummary](https://www.zuora.com/developer/api-reference/#operation/GET_RevenueItemsByChargeRevenueSummaryNumber): `zuora.api().revenue.items.getBySummary(crsNumber, requestOptions)`
    * [getByEvent](https://www.zuora.com/developer/api-reference/#operation/GET_RevenueItemsByChargeRevenueEventNumber): `zuora.api().revenue.items.getByEvent(eventNumber, requestOptions)`
    * [updateByEvent](https://www.zuora.com/developer/api-reference/#operation/PUT_CustomFieldsonRevenueItemsByRevenueEvent): `zuora.api().revenue.items.updateByEvent(eventNumber, requestOptions)`
    * [getBySchedule](https://www.zuora.com/developer/api-reference/#operation/GET_RevenueItemsByRevenueSchedule): `zuora.api().revenue.items.getBySchedule(rsNumber, requestOptions)`
    * [updateBySchedule](https://www.zuora.com/developer/api-reference/#operation/PUT_CustomFieldsonRevenueItemsByRevenueSchedule): `zuora.api().revenue.items.updateBySchedule(rsNumber, requestOptions)`
  * rules
    * [find](https://www.zuora.com/developer/api-reference/#operation/GETRevenueRecognitionRuleAssociation): `zuora.api().revenue.rules.find(chargeKey, requestOptions)`
  * schedules
    * [getByAdjustment](https://www.zuora.com/developer/api-reference/#operation/GET_RSbyInvoiceItemAdjustment): `zuora.api().revenue.schedules.getByAdjustment(invoiceItemAdjId, requestOptions)`
    * [createAdjustment](https://www.zuora.com/developer/api-reference/#operation/POST_RSforInvoiceItemAdjustment_ManualDistribution): `zuora.api().revenue.schedules.createAdjustment(invoiceItemAdjId, requestOptions)`
    * [createAdjustmentByRange](https://www.zuora.com/developer/api-reference/#operation/POST_RSforInvoiceItemAdjustment_DistributeByDateRange): `zuora.api().revenue.schedules.createAdjustmentByRange(invoiceItemAdjId, requestOptions)`
    * [getByInvoiceItem](https://www.zuora.com/developer/api-reference/#operation/GET_RSbyInvoiceItem): `zuora.api().revenue.schedules.getByInvoiceItem(invoiceItemId, requestOptions)`
    * [createForInvoiceItem](https://www.zuora.com/developer/api-reference/#operation/POST_RSforInvoiceItem_ManualDistribution): `zuora.api().revenue.schedules.createForInvoiceItem(invoiceItemId, requestOptions)`
    * [createForInvoiceItemByRange](https://www.zuora.com/developer/api-reference/#operation/POST_RSforInvoiceItem_DistributeByDateRange): `zuora.api().revenue.schedules.createForInvoiceItemByRange(invoiceItemId, requestOptions)`
    * [getBySubscription](https://www.zuora.com/developer/api-reference/#operation/GETRSDetailsByCharge): `zuora.api().revenue.schedules.getBySubscription(chargeKey, requestOptions)`
    * [createBySubscription](https://www.zuora.com/developer/api-reference/#operation/POSTRevenueScheduleByChargeResponse): `zuora.api().revenue.schedules.createBySubscription(chargeKey, requestOptions)`
    * [delete](https://www.zuora.com/developer/api-reference/#operation/DELETE_RS): `zuora.api().revenue.schedules.delete(rsNumber, requestOptions)`
    * [getDetails](https://www.zuora.com/developer/api-reference/#operation/GETRSDetail): `zuora.api().revenue.schedules.getDetails(rsNumber, requestOptions)`
    * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_RSBasicInfo): `zuora.api().revenue.schedules.update(rsNumber, requestOptions)`
    * [distributeByPeriods](https://www.zuora.com/developer/api-reference/#operation/PUT_RevenueAcrossAP): `zuora.api().revenue.schedules.distributeByPeriods(rsNumber, requestOptions)`
    * [distributeByDate](https://www.zuora.com/developer/api-reference/#operation/PUT_RevenueSpecificDate): `zuora.api().revenue.schedules.distributeByDate(rsNumber, requestOptions)`
    * [distributeByRange](https://www.zuora.com/developer/api-reference/#operation/PUT_RevenueByRecognitionStartandEndDates): `zuora.api().revenue.schedules.distributeByRange(rsNumber, requestOptions)`
* rsaSignatures
  * [generate](https://www.zuora.com/developer/api-reference/#operation/POSTRSASignature): `zuora.api().rsaSignatures.generate(requestOptions)`
  * [decrypt](https://www.zuora.com/developer/api-reference/#operation/POSTDecryptResponse): `zuora.api().rsaSignatures.decrypt(requestOptions)`
* settings
  * [startDate](https://www.zuora.com/developer/api-reference/#operation/GETRevenueStartDateSetting): `zuora.api().settings.startDate(requestOptions)`
* subscriptions
  * [create](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription): `zuora.api().subscriptions.create(requestOptions)`
  * [getByAccount](https://www.zuora.com/developer/api-reference/#operation/GETSubscription): `zuora.api().subscriptions.getByAccount(accountKey, requestOptions)`
  * [preview](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview): `zuora.api().subscriptions.preview(requestOptions)`
  * [getByKey](https://www.zuora.com/developer/api-reference/#operation/GETOneSubscription): `zuora.api().subscriptions.getByKey(subscriptionKey, requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription): `zuora.api().subscriptions.update(subscriptionKey, requestOptions)`
  * [cancel](https://www.zuora.com/developer/api-reference/#operation/POSTSubscriptionCancellation): `zuora.api().subscriptions.cancel(subscriptionKey, requestOptions)`
  * [renew](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription): `zuora.api().subscriptions.renew(subscriptionKey, requestOptions)`
  * [resume](https://www.zuora.com/developer/api-reference/#operation/PUTSubscriptionResume): `zuora.api().subscriptions.resume(subscriptionKey, requestOptions)`
  * [suspend](https://www.zuora.com/developer/api-reference/#operation/PUTSubscriptionSuspend): `zuora.api().subscriptions.suspend(subscriptionKey, requestOptions)`
* transactions
  * [getInvoices](https://www.zuora.com/developer/api-reference/#operation/GETInvoice): `zuora.api().transactions.getInvoices(accountKey, requestOptions)`
  * [getPayments](https://www.zuora.com/developer/api-reference/#operation/GETPayments): `zuora.api().transactions.getPayments(accountKey, requestOptions)`
* usage
  * [create](https://www.zuora.com/developer/api-reference/#operation/POST_Usage): `zuora.api().usage.create(requestOptions)`
  * [find](https://www.zuora.com/developer/api-reference/#operation/GET_Usage): `zuora.api().usage.find(accountKey, requestOptions)`
* object -- the 'object' portion of the service API allows you to perform common CRUD operations on zuora objects
  * [find](https://www.zuora.com/developer/api-reference/#operation/ProxyGETAccountingCode): `zuora.api().object.find('accounting-code', id, requestOptions)`
  * [create](https://www.zuora.com/developer/api-reference/#operation/ProxyPOSTAccountingCode): `zuora.api().object.create('accounting-code', requestOptions)`
  * [delete](https://www.zuora.com/developer/api-reference/#operation/ProxyDELETEAccountingCode): `zuora.api().object.delete('accounting-code', id, requestOptions)`
  * [update](https://www.zuora.com/developer/api-reference/#operation/ProxyPUTAccountingCode): `zuora.api().object.update('accounting-code', id, requestOptions)`

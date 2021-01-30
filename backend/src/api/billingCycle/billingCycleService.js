const BillingCycle = require('./billingCycle')

//express webservices configuration
BillingCycle.methods(['get','post','put','delete'])
// set validators to put method
BillingCycle.updateOptions({new: true, runValidators: true})

module.exports = BillingCycle

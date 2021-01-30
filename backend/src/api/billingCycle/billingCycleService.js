const BillingCycle = require('./billingCycle')

//express webservices configuration
BillingCycle.methods(['get','post','put','delete'])
// set validators to put method
BillingCycle.updateOptions({new: true, runValidators: true})

//fix request get method
BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    })
})

module.exports = BillingCycle

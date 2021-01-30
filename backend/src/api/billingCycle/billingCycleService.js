const BillingCycle = require('./billingCycle')

//express webservices configuration
BillingCycle.methods(['get', 'post', 'put', 'delete'])
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

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

module.exports = BillingCycle

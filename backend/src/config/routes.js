const express = require('express')

//set parameters between modules
module.exports = function(server){

    //set base URL to all routes
    const router = express.Router()
    server.use('/api', router)

    //Routers to billing cycles
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, 'billingCycles')
}
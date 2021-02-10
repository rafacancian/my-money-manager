const express = require('express')
const auth = require('./auth')

//set parameters between modules
module.exports = function(server){

    // Routes protected from JWT
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    //Routers to billing cycles
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

    // Routes open
    const openApi = express.Router()
    server.use('oapi', openApi)
    const AuthService = require('../api/user/AuthService')
    openApi.post('/login', AuthService.login)
    openApi.post('/validateToken', AuthService.validateToken)
}
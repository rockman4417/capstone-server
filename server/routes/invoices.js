const express = require('express')
const router = express.Router()

const invoicesController = require('../controllers/invoices.js')
// Create, Read, Update, Delete 311-2 CRUD

router.post('/invoices', invoicesController.createInvoice)
router.get('/invoices', invoicesController.listInvoices)
// get one user
// put(update) user
// post(delete) user

module.exports = router


// 311-4 Routes and Controllers
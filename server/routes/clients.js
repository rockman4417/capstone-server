const express = require('express')
const router = express.Router()

const clientsController = require('../controllers/clients.js')
// Create, Read, Update, Delete 311-2 CRUD

router.post('/clients', clientsController.createClient)
router.get('/clients', clientsController.listClients)
// get one user
// put(update) user
// post(delete) user

module.exports = router


// 311-4 Routes and Controllers
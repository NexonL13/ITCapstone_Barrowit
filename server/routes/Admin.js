const express = require('express')
const router = express.Router()
const adminController = require('../controllers/adminController')



//POST REGISTER
router.post('/', adminController.registerAdmin)

//POST LOGIN
router.post('/login', adminController.loginAdmin)


module.exports = router
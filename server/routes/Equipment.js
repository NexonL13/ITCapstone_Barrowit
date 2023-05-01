const express = require('express')
const router = express.Router()
const equipmentController = require('../controllers/equipmentController')



//GET
router.get('/', equipmentController.getEquipment)

//POST
router.post('/', equipmentController.upload, equipmentController.addEquipment)

//UPDATE
router.put('/:equipmentId', equipmentController.updateEquipment)

//DELETE
router.delete('/:equipmentId', equipmentController.deleteEquipment)


module.exports = router
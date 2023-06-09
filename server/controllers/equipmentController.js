const { Equipment } = require('../models')
const multer = require('multer')
const path = require('path')

const getEquipment = async (req,res) => {
    const listOfEquipment = await Equipment.findAll()
    res.json(listOfEquipment)
}

const addEquipment = async (req, res) => {
    const equipment = {
        image: req.file.filename,
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category,
        status: req.body.status
    }
    await Equipment.create(equipment)
    res.json(equipment)
}

const updateEquipment = async (req,res) => {
    const equipmentId = req.params.equipmentId
    const equipment = {
        image: req.file.filename,
        name: req.body.name,
        description: req.body.description,
        stock: req.body.stock,
        category: req.body.category,
        status: req.body.status
    }
    await Equipment.update(equipment, {where: {id:equipmentId}}).then(() => {
        console.log("Updated")
    })
}

const deleteEquipment = (req,res) => {
    const equipmentId = req.params.equipmentId

    Equipment.destroy({
        where: {
            id: equipmentId,
        }
    })
    res.json("Deleted")
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('image')

module.exports = {
    getEquipment, 
    addEquipment,
    updateEquipment,
    deleteEquipment,
    upload
}
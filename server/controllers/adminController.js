const { Admin } = require('../models')
const bcrypt = require('bcrypt')


const registerAdmin = async (req, res) => {
    const { email, password } = req.body

    bcrypt.hash(password, 10).then((hash) => {
         Admin.create({
            email: email,
            password: hash,
        })
    res.json("Success")
    })
}

const loginAdmin = async (req,res) => {
    const { email, password } = req.body

    const emailAdmin = await Admin.findOne({where: {email: email}})

    if(emailAdmin) {
        bcrypt.compare(password, emailAdmin.password).then((match) => {
            if(!match) return res.json({error:"Incorrect username and password"})

            return res.json({success:"Login success"})
        })
    }else {
        return res.json({error: "Email doesn't exist"})
    }
}

module.exports = { registerAdmin, loginAdmin }
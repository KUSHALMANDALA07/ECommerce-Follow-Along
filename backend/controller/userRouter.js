const express = require('express');

const userRouter = express.Router();
const bcrypt = require('bcryptjs');
const uploadUserImage = require('../middlewares/multer');

const {userModel} = require('../models/userModel');

userRouter.post("/signup",uploadUserImage.single("image"),async(request, response) => {
    try {
        const {name, email, password} = request.body;
        if(!name || !email || !password) {
            return response.status(400).send({message:"Please enter all the fields"});
        }
        const user =await userModel.findOne({emai:email});
        if(user) {
            return response.status(200).send({message:"User already exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const newuser =await userModel.insertOne({ name,email,password:hash });
        return response.status(200).send({message:"User signed up successfully"});
    } catch (error) {
        return response.status(500).send({message:"Something went wrong"});
    }
})

userRouter.post("/login", async(request, response) => {
    try {
        const {email, password} = request.body;
        if(!email || !password) {
            return response.status(400).send({message:"Please enter all the fields"});
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = await userModel.findOne({email});
        const matchedPass = bcrypt.compareSync(password, hash);
        if(user && matchedPass) {
            return response.status(200).send({message:"User logged in successfully"});
        }
        return response.status(401).send({message:"Entered details are wrong"});
    } catch (error) {
        return response.status(500).send({message:"Something went wrong"});
    }
})



module.exports = userRouter;
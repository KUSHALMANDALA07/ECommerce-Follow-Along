const express = require("express");

const allProductsRouter = express.Router();

const productModel = require("../models/productModel");

allProductsRouter.get("/", async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).send({message:"sucessful",products:products});
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
})

allProductsRouter.get("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).send({message:"Please provide id"});
        }
        const product = await productModel.findOne({_id:id});
        return res.status(200).send({message:"sucessful",product:product});
    } catch (error) {
        return res.status(500).send({message:"something went wrong"});
    }
})

module.exports = allProductsRouter; 
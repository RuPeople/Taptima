const uuid = require('uuid')
const path = require('path')
const {Product} = require("../models/models");
const ApiError = require('../error/ApiError')

class ProductController {
    async create (req, res, next) {
        try{
            const {name, netWeight, grossWeight, volume, price} = req.body
            const {thumbnail} = req.files
            let fileName = uuid.v4() + ".png"
            await thumbnail.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, netWeight, grossWeight, volume, price, thumbnail:fileName})
            return res.json(product)
        }
        catch (e) {
            next(ApiError.badRequest())
        }
    }
    async getAll (req, res) {
        let {name} = req.query
        let products;

        if (!name) {
            products = await Product.findAndCountAll()
        }
        if (name) {
            products = await Product.findAndCountAll({where: {name}})
        }
        return res.json(products)
    }
    async getOne (req, res, next) {
        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
            }
        )
        return res.json(product)
    }
    async delete (req, res) {

    }
}
module.exports = new ProductController()
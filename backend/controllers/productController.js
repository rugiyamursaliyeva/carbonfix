import ProductModel from "../models/productModule.js";

const getProduct = async (req, res) => {
    const products = await ProductModel.find()
    res.json(products)
}

const postProducts = async (req, res) => {
    const {image, name, desciption} = req.body
    const product = {image, name, desciption}
    await ProductModel.create(product)
    res.json(product)
}

const deleteProducts = async (req, res) => {
    const {id} = req.params
    await ProductModel.findByIdAndDelete(id)
    res.json(`${id} -li product silindi`)
}

export {getProduct, postProducts, deleteProducts}
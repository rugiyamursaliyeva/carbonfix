import express from 'express'
import { deleteProducts, getProduct, postProducts } from '../controllers/productController.js'

const router = express.Router()

router
.get('/product', getProduct)
.post('/product', postProducts)
.delete('/product/:id', deleteProducts)

export default router
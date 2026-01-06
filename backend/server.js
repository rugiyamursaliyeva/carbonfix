import express from 'express'
import cors from 'cors'
import { connectDB } from './configs/config.js'
import ProductRouter from './routes/productRoutes.js'

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

app.use('/', ProductRouter)

connectDB()
app.listen(5000, () => {
    console.log('backend running');
    
})
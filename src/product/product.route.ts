import express from 'express'
import { ProductControllers } from './product.controller'
const router = express.Router()

//will call controller
router.post('/', ProductControllers.createProduct)
router.get('/', ProductControllers.FetchAllProduct)


export const ProductRoutes = router;

import express from 'express'
import { ProductControllers } from './product.controller'
const router = express.Router()

//will call controller
router.post('/', ProductControllers.createProduct)
router.get('/', ProductControllers.FetchAllProduct)
router.get('/:productId', ProductControllers.findByproductID)
router.put('/:productId',ProductControllers.updateById)
router.delete('/:productId',ProductControllers.DeleteById)

export const ProductRoutes = router;

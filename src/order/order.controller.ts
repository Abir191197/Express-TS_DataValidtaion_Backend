import { Request, Response } from 'express'
import ProductModel from '../product/product.model'
import { getProductByID } from '../product/product.service'
import { OrderService } from './order.service'
import { OrderValidationSchema } from './order.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body

    const zodPerseData = OrderValidationSchema.parse(order)

    const { productId: product_id, quantity } = zodPerseData

    const product = await getProductByID(product_id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      })
    }

    // check if the product is in stock
    if (product.inventory.inStock === false) {
      return {
        success: false,
        status: 500,
        message: 'Insufficient quantity available in inventory!',
        data: null,
      }
    }

    if (zodPerseData.quantity > product.inventory.quantity) {
      return {
        success: false,
        status: 500,
        message: `Insufficient quantity available in inventory! Only ${product.inventory.quantity} products available.`,
        data: null,
      }
    }
    const result = await OrderService.createOrderIntoDB(zodPerseData)

    // Update quantity & inStock in inventory
    await ProductModel.findByIdAndUpdate(product_id, {
      $inc: { 'inventory.quantity': -quantity },
      $set: {
        'inventory.inStock':
          product.inventory.quantity - quantity <= 0 ? false : true,
      },
    })

    res.status(200).json({
      success: true,
      message: 'Order create Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

//fetch all order and search

const getAllOrder = async (req: Request, res: Response) => {
  const { email } = req.query

  const result = await OrderService.getAllOrderFromDB(email as string)

  return res.status(result.status).json({
    success: result.success,
    message: result.message,
    data: result.data,
  })
}

export const orderController = {
  createOrder,
  getAllOrder,
}

import { Request, Response } from "express"
import { OrderValidationSchema } from "./order.validation"
import { OrderService } from "./order.service"

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    //send response
    //send or call  service function  to send this data

    const zodPerseData = OrderValidationSchema.parse(order)
    const result = await OrderService.createOrderIntoDB(zodPerseData)

    res.status(200).json({
      success: true,
      message: 'Order create Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}


export const orderController = {
  createOrder,
}
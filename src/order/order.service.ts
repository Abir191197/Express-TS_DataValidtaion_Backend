import { TOrder } from "./order.interface"
import OrderModel from "./order.model"

const createOrderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order)
    return result;


}


//All order and search by email

const getAllOrderFromDB = async (email?: string) => {
  try {
    let query = {}
    if (email) {
      query = {
        $or: [{ email: { $regex: email, $options: 'i' } }],
      }
    }

    const order = await OrderModel.find(query)

    const message = email
      ? `Products matching email "${email}" fetched successfully!`
      : 'Order fetched successfully!'

    return {
      success: true,
      status: 200,
      message,
      data: order,
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      status: 500,
      message: 'Internal server error',
      data: null,
    }
  }
}



export const OrderService = {
  createOrderIntoDB,
  getAllOrderFromDB,
}
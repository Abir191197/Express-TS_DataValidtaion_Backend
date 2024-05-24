import mongoose, { Document, Schema } from 'mongoose'
import { TOrder } from './order.interface'

// Define the schema for the order data
const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
})

// Create the Mongoose model
const OrderModel = mongoose.model<TOrder>('Order', OrderSchema)

export default OrderModel

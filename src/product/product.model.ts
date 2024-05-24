import mongoose, { Schema } from 'mongoose'
import { TProduct, TInventory, TVariant } from './product.interface'

const variantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
})

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
})

const ProductSchema = new Schema<TProduct>({
  name: { type: String, required: [true, 'Product name is required'] },
  description: {
    type: String,
    required: [true, 'Product description is required'],
  },
  price: { type: Number, required: [true, 'Price is required'], min: 0 },

  category: { type: String, required: [true, 'Category is required'] },

  tags: { type: [String], required: [true, 'Tags is required'] },

  inventory: {
    type: inventorySchema,
    required: [true, 'Variants is required'],
  },
  variants: {
    type: [variantSchema],
    required: [true, 'Inventory is required'],
  },
})

const ProductModel = mongoose.model<TProduct>('Product', ProductSchema)

export default ProductModel

import { z } from 'zod'

export const OrderValidationSchema = z.object({
  email: z.string().email({
    message: 'Invalid email format. Please provide a valid email address.',
  }),
  productId: z.string(),
  price: z.number().positive({
    message: 'Price must be a positive number.',
  }),
  quantity: z.number().int().positive({
    message: 'Quantity must be a positive integer.',
  }),
})

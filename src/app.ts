import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { OrderRoutes } from './order/order.route'
import { ProductRoutes } from './product/product.route'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Server is running!!  Show product  https://ecom-backend-kohl.vercel.app/api/products OR Order list https://ecom-backend-kohl.vercel.app/api/orders  ',
  )
})
app.use('/api/products', ProductRoutes)
app.use('/api/orders', OrderRoutes)

export default app

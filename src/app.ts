import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './product/product.route'
import { OrderRoutes } from './app/order/order.route'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running End path /api/products')
})
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes)



export default app

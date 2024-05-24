import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { ProductRoutes } from './product/product.route'
const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running End path /api/products')
})
app.use('/api/products', ProductRoutes);


export default app

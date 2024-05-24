import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body;
        //send response
        //send or call  service function  to send this data
        const result = await ProductServices.createProductIntoDB(product);

        res.status(200).json({
            success: true,
            message: "Product create Successfully",
            data: result
        })
    }
        
        
    catch (error) {
         console.log(error)
        
    }

}


const FetchAllProduct = async (req: Request, res: Response) => {
  try {
   
    const result = await ProductServices.getAllProductFromDB()

    res.status(200).json({
      success: true,
      message: 'Product Fetch Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}


export const ProductControllers = {
  createProduct,
  FetchAllProduct,
}
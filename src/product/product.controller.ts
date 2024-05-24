import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import { TProduct } from "./product.interface";

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



const findByproductID = async (req: Request, res: Response) => {
  try {
    const {productId} = req.params
    //send response
    //send or call  service function  to send this data
    const result = await ProductServices.getProductByID(productId)

    res.status(200).json({
      success: true,
      message: 'Product fetched by ID successfully!',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}


//update controller

const updateById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
     const data : TProduct = req.body;

    
    const updated = await ProductServices.updateProductByID(productId, data)

    res.status(200).json({
      success: true,
      message: 'Product Updated by ID successfully!',
      data: data,
    })
  } catch (error) {
    console.log(error)
  }
}



export const ProductControllers = {
  createProduct,
  FetchAllProduct,
  findByproductID,
  updateById,
}
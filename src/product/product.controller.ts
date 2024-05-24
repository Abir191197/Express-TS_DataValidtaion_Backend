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
  const { searchTerm } = req.query

  const result = await ProductServices.getAllProductFromDB(
    searchTerm as string,
  )

  return res.status(result.status).json({
    success: result.success,
    message: result.message,
    data: result.data,
  })
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
//Delete COntroller

const DeleteById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params
    

    const result = await ProductServices.deleteProductByID(productId)

    res.status(200).json({
      success: true,
      message: 'Product Delete successfully!',
      data: result,
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
  DeleteById,
  
}
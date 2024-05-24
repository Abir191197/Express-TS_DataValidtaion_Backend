import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB =async (product: TProduct) => {
    
    const result = await ProductModel.create(product)
    return result;

    // return korel controller e cole jabe
}

const getAllProductFromDB = async () => {
    const result = await ProductModel.find();
    return result;
}


const getProductByID = async (id:String) => {
     //not work//const result = await ProductModel.aggregate([{ $match: { _id } }])
    const result = await ProductModel.findById(id);
    return result;
}





export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByID,
}
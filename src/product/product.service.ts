import { TProduct } from "./product.interface";
import ProductModel from "./product.model";

const createProductIntoDB =async (product: TProduct) => {
    
    const result = await ProductModel.create(product)
    return result;

    // return korel controller e cole jabe
}

// const getAllProductFromDB = async () => {
//     const result = await ProductModel.find();
//     return result;
// }


export const getProductByID = async (id:String) => {
     //not work//const result = await ProductModel.aggregate([{ $match: { _id } }])
    const result = await ProductModel.findById(id);
    return result;
}

const updateProductByID = async (id: String,data:TProduct) => {
    
    const result = await ProductModel.findByIdAndUpdate(id,data);
    return result;
}


//delete product

const deleteProductByID = async (id: String) => {
    const result = await ProductModel.findByIdAndDelete(id);
    return result;
}

//search by anything

// const searchProductIntoDB = async (data: string) => {
//   const result = await ProductModel.find({
//     name: { $regex: data, $options: 'i' }, 
//   })
//   return result
// }



  const getAllProductFromDB = async (
  searchTerm?: string) => {
  try {
    let query = {}
    if (searchTerm) {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
          { category: { $regex: searchTerm, $options: 'i' } },
        ],
      }
    }

    const products = await ProductModel.find(query)

    const message = searchTerm
      ? `Products matching search term "${searchTerm}" fetched successfully!`
      : 'Products fetched successfully!'

    return {
      success: true,
      status: 200,
      message,
      data: products,
    }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      status: 500,
      message: 'Internal server error',
      data: null,
    }
  }
}



export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByID,
  updateProductByID,
  deleteProductByID,
  
}
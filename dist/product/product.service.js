"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = exports.getProductByID = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
    // return korel controller e cole jabe
});
// const getAllProductFromDB = async () => {
//     const result = await ProductModel.find();
//     return result;
// }
const getProductByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //not work//const result = await ProductModel.aggregate([{ $match: { _id } }])
    const result = yield product_model_1.default.findById(id);
    return result;
});
exports.getProductByID = getProductByID;
const updateProductByID = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndUpdate(id, data);
    return result;
});
//delete product
const deleteProductByID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result;
});
//search by anything
// const searchProductIntoDB = async (data: string) => {
//   const result = await ProductModel.find({
//     name: { $regex: data, $options: 'i' }, 
//   })
//   return result
// }
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (searchTerm) {
            query = {
                $or: [
                    { name: { $regex: searchTerm, $options: 'i' } },
                    { description: { $regex: searchTerm, $options: 'i' } },
                    { category: { $regex: searchTerm, $options: 'i' } },
                ],
            };
        }
        const products = yield product_model_1.default.find(query);
        const message = searchTerm
            ? `Products matching search term "${searchTerm}" fetched successfully!`
            : 'Products fetched successfully!';
        return {
            success: true,
            status: 200,
            message,
            data: products,
        };
    }
    catch (error) {
        console.log(error);
        return {
            success: false,
            status: 500,
            message: 'Internal server error',
            data: null,
        };
    }
});
exports.ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getProductByID: exports.getProductByID,
    updateProductByID,
    deleteProductByID,
};

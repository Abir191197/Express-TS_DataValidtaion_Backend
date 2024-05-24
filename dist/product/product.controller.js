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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const product_validtion_1 = require("./product.validtion");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        //send response
        //send or call  service function  to send this data
        const zodPerseData = product_validtion_1.productValidationSchema.parse(product);
        const result = yield product_service_1.ProductServices.createProductIntoDB(zodPerseData);
        res.status(200).json({
            success: true,
            message: "Product create Successfully",
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const FetchAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = req.query;
    const result = yield product_service_1.ProductServices.getAllProductFromDB(searchTerm);
    return res.status(result.status).json({
        success: result.success,
        message: result.message,
        data: result.data,
    });
});
const findByproductID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        //send response
        //send or call  service function  to send this data
        const result = yield product_service_1.ProductServices.getProductByID(productId);
        res.status(200).json({
            success: true,
            message: 'Product fetched by ID successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
//update controller
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const zodPerseData = product_validtion_1.productValidationSchema.parse(data);
        const updated = yield product_service_1.ProductServices.updateProductByID(productId, zodPerseData);
        res.status(200).json({
            success: true,
            message: 'Product Updated by ID successfully!',
            data: data,
        });
    }
    catch (error) {
        console.log(error);
    }
});
//Delete COntroller
const DeleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductByID(productId);
        res.status(200).json({
            success: true,
            message: 'Product Delete successfully!',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.ProductControllers = {
    createProduct,
    FetchAllProduct,
    findByproductID,
    updateById,
    DeleteById,
};

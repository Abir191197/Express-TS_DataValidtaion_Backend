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
exports.orderController = void 0;
const product_model_1 = __importDefault(require("../product/product.model"));
const product_service_1 = require("../product/product.service");
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const zodPerseData = order_validation_1.OrderValidationSchema.parse(order);
        const { productId: product_id, quantity } = zodPerseData;
        const product = yield (0, product_service_1.getProductByID)(product_id);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
        // check if the product is in stock
        if (product.inventory.inStock === false) {
            return {
                success: false,
                status: 500,
                message: 'Insufficient quantity available in inventory!',
                data: null,
            };
        }
        if (zodPerseData.quantity > product.inventory.quantity) {
            return {
                success: false,
                status: 500,
                message: `Insufficient quantity available in inventory! Only ${product.inventory.quantity} products available.`,
                data: null,
            };
        }
        const result = yield order_service_1.OrderService.createOrderIntoDB(zodPerseData);
        // Update quantity & inStock in inventory
        yield product_model_1.default.findByIdAndUpdate(product_id, {
            $inc: { 'inventory.quantity': -quantity },
            $set: {
                'inventory.inStock': product.inventory.quantity - quantity <= 0 ? false : true,
            },
        });
        res.status(200).json({
            success: true,
            message: 'Order create Successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
//fetch all order and search
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const result = yield order_service_1.OrderService.getAllOrderFromDB(email);
    return res.status(result.status).json({
        success: result.success,
        message: result.message,
        data: result.data,
    });
});
exports.orderController = {
    createOrder,
    getAllOrder,
};

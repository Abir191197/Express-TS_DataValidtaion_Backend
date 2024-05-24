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
exports.OrderService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.create(order);
    return result;
});
//All order and search by email
const getAllOrderFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let query = {};
        if (email) {
            query = {
                $or: [{ email: { $regex: email, $options: 'i' } }],
            };
        }
        const order = yield order_model_1.default.find(query);
        const message = email
            ? `Products matching email "${email}" fetched successfully!`
            : 'Order fetched successfully!';
        return {
            success: true,
            status: 200,
            message,
            data: order,
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
exports.OrderService = {
    createOrderIntoDB,
    getAllOrderFromDB,
};

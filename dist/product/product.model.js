"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const variantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, 'Product name is required'] },
    description: {
        type: String,
        required: [true, 'Product description is required'],
    },
    price: { type: Number, required: [true, 'Price is required'], min: 0 },
    category: { type: String, required: [true, 'Category is required'] },
    tags: { type: [String], required: [true, 'Tags is required'] },
    inventory: {
        type: inventorySchema,
        required: [true, 'Variants is required'],
    },
    variants: {
        type: [variantSchema],
        required: [true, 'Inventory is required'],
    },
});
const ProductModel = mongoose_1.default.model('Product', ProductSchema);
exports.default = ProductModel;

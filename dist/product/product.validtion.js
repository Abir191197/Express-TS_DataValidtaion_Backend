"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidationSchema = void 0;
const zod_1 = require("zod");
const variantSchema = zod_1.z.object({
    type: zod_1.z.string({ message: 'Variant type is required' }),
    value: zod_1.z.string({ message: 'Variant value is required' }),
});
const inventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number({ message: 'Quantity is Number type' })
        .positive({ message: 'Quantity can not be negative' }),
    inStock: zod_1.z.boolean({ message: 'InStock is required' }),
}, { message: 'Inventory Info is required' });
const productValidationSchema = zod_1.z.object({
    name: zod_1.z.string({ message: 'Product name is required' }),
    description: zod_1.z.string({ message: 'Product description is required' }),
    price: zod_1.z.number().positive({ message: 'Price can not be negative' }),
    category: zod_1.z.string({ message: 'Category is required' }),
    tags: zod_1.z.array(zod_1.z.string(), { message: 'Product Tags is required' }),
    variants: zod_1.z.array(variantSchema, { message: 'Variants is required' }),
    inventory: inventorySchema,
});
exports.productValidationSchema = productValidationSchema;

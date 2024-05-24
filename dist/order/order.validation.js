"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidationSchema = void 0;
const zod_1 = require("zod");
exports.OrderValidationSchema = zod_1.z.object({
    email: zod_1.z.string().email({
        message: 'Invalid email format. Please provide a valid email address.',
    }),
    productId: zod_1.z.string(),
    price: zod_1.z.number().positive({
        message: 'Price must be a positive number.',
    }),
    quantity: zod_1.z.number().int().positive({
        message: 'Quantity must be a positive integer.',
    }),
});

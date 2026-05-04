import { z } from "zod";
import { productSchema } from "../types/product.type";

// DTO- data transfer object - what is person in the request/response
export const CreateProductDTO = productSchema.omit({ id: true });
// alternative
// for create, id is not required
export type CreateProductDTO = z.infer<typeof CreateProductDTO>;


export const UpdateProductDTO = productSchema.partial();
import { z } from "zod";


export const productSchema = z.object({
    id: z.number(),
    name: z.string("should be string").min(1).default("unnamed product"),
    price: z.number("should be number").min(1, "must be non negative"),
    category: z.string().optional(),
});


//domain model- what is person in the application
export type product = z.infer<typeof productSchema>; //convert to type
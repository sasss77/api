// export interface Person {
//     id: number;
//     name: string;
//     age: number;
// }
import { z } from "zod";


export const personSchema = z.object({
    id: z.number(),
    name: z.string("should be string").min(1, "name is required" ),
    age: z.number("should be number").min(1, "age is positive" ),
});


//domain model- what is person in the application
export type person = z.infer<typeof personSchema>; //convert to type
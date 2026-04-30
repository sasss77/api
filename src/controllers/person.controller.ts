import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { Person } from "../types/person.type";
import { ApiResponseHelper } from "../utils/apihelper.util";
import { HttpException } from "../exceptions/http-exception";

export class PersonController {
    async getAllPersons(req: Request, res: Response) {
        // patch function
        // return res.json(dataset);
        try {
            const someVar: any = {};



            //without custom exception
            if (!someVar.ref) {
                //throw new error("reference not found"); //either
                // return ApiResponseHelper.error (
                //     res, "Reference not found", 404
                // );

                throw new HttpException(404, "Reference not found");
                
            }

            someVar.ref.add("test"); //error

            return ApiResponseHelper.success(
                res, dataset, "Person fetched successfully", 200
            );
        } catch (error: Error | any | HttpException) {
            return ApiResponseHelper.error(
                res, "failed to fetch persons", error.status ?? 500
            );
        }

    }

    
    async addPerson(req: Request, res: Response) {
      
            const { name, age } = req.body; //body parameters/ client data
            const newPerson: Person = {
                id: dataset.length + 1,
                name,
                age
            }
            dataset.push(newPerson); //add to dataset
          
            return res.json(newPerson);
      
        
    }
    // API consistency

}



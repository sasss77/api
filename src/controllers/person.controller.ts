import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { person } from "../types/person.type";
import { ApiResponseHelper } from "../utils/apihelper.util";
import { HttpException } from "../exceptions/http-exception";
import { CreatePersonDTO } from "../dtos/person.dto";
import { z } from "zod";








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

       // API consistency
    // 1. Consistent response structure
    // 2. logic through exceptions
    // 3. combine response and error handling

    async addPerson(req: Request, res: Response) {
        const parsedData = CreatePersonDTO.safeParse(req.body);
        if (!parsedData.success) {
            return ApiResponseHelper.error(
                res, z.prettifyError(parsedData.error), 400
            );
        }

        const { name, age } = req.body; //body parameters/ client data
        if (!name) {
            throw new HttpException(404, "Name is required");
        }
        if (!age) {
            throw new HttpException(404, "Age is required");
        }
            const newPerson: person = {
                id: dataset.length + 1,
                name,
                age
            }
            dataset.push(newPerson); //add to dataset
          
        // return res.json(newPerson);
        return ApiResponseHelper.success(
            res,newPerson, "Person cerated successfully", 201
        );
      
        
    }
 


}



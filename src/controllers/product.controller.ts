import { Request, Response } from "express";
import { ApiResponseHelper } from "../utils/apihelper.util";
import { HttpException } from "../exceptions/http-exception";
import { z } from "zod";
import { CreateProductDTO } from "../dtos/product.dto";
import { dataset } from "../models/product.model";
import { product } from "../types/product.type";








export class ProductController {
    async getAllProducts(req: Request, res: Response) {
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
                res, dataset, "Product fetched successfully", 200
            );
        } catch (error: Error | any | HttpException) {
            return ApiResponseHelper.error(
                res, "failed to fetch products", error.status ?? 500
            );
        }

    }

       // API consistency
    // 1. Consistent response structure
    // 2. logic through exceptions
    // 3. combine response and error handling

    async addProduct(req: Request, res: Response) {
        const parsedData = CreateProductDTO.safeParse(req.body);
        if (!parsedData.success) {
            return ApiResponseHelper.error(
                res, z.prettifyError(parsedData.error), 400
            );
        }

        const { name } = req.body; //body parameters/ client data
        if (!name) {
            throw new HttpException(404, "Name is required");
        }
     
            const newProduct: product = {
                id: dataset.length + 1,
                name,
                price: 0, 
            }
            dataset.push(newProduct); //add to dataset
          
        // return res.json(newPerson);
        return ApiResponseHelper.success(
            res,newProduct, "Product created successfully", 201
        );
      
        
    }
 


}



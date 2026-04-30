// API response example
const res = {
    "status": 200,
    "success": true,
    "message": "Product fetched successfully",
    "data": [],
    "meta": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}


import { Response } from "express";

export interface PaginationMeta {
    page: number;
    limit: number;
    total: number;

}

export interface APIResponse<T> {
    status: number;
    success: boolean;
    message: string;
    data: T;
    meta?: PaginationMeta; //Optional 
}



export class ApiResponseHelper {
    static success<T>(
        res: Response,
        data: T,
        message: string = "Success",
        status: number = 200,
        meta?: PaginationMeta
    ): Response {
        const response: APIResponse<T> = {
            status,
            success: true,
            message,
            data,
            meta
        }
        return res.status(status).json(response);
    }
    
    static error<t>(
        res: Response,
        message: string = "Error",
        status: number = 500,
    ): Response {
        const response: APIResponse<null> = {
            status,
            success: false,
            message,
            data: null
        }
        return res.status(status).json(response);
    }
}
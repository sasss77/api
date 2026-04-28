import { Request, Response } from "express";
import { dataset } from "../models/person.model";


export class PersonController {
    async getAllPersons(req: Request, res: Response) {
        // patch function
        return res.json(dataset);

    }
}

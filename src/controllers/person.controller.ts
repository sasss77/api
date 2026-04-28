import { Request, Response } from "express";
import { dataset } from "../models/person.model";
import { Person } from "../types/person.type";


export class PersonController {
    async getAllPersons(req: Request, res: Response) {
        // patch function
        return res.json(dataset);

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
}

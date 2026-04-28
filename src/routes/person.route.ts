import express, { Request, Response, Router } from "express"; 
import { PersonController } from "../controllers/person.controller";

const router: Router = Router();
const personController = new PersonController();



//1. get all persons
router.get("/", personController.getAllPersons);
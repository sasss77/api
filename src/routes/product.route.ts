import express, { Request, Response, Router } from "express"; 
import { ProductController } from "../controllers/product.controller";


const router: Router = Router();
const productController = new ProductController();



//1. get all persons
router.get("/get/all", productController.getAllProducts);
router.post("/create/product/new", productController.addProduct);

export default router;
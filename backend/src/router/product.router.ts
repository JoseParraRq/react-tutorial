import { Router } from "express";
import { ProductController } from "../controller/product.controller";
import { middlewareJwt, middlewareUserType } from "../middleware/middleware.api";

const router = Router();

// router.post("/createProduct", middlewareJwt,middlewareUserType,ProductController.createProduct);
// router.post("/getProductById",middlewareJwt,ProductController.getProductById);
// router.get("/getAllProducts",middlewareJwt,ProductController.getAllProducts);
// router.put("/updateProduct",middlewareJwt,ProductController.updateProduct);
// router.delete("/deleteProduct",middlewareJwt,middlewareUserType,ProductController.deleteProductLogic);



router.post("/createProduct",ProductController.createProduct);
router.post("/getProductById",ProductController.getProductById);
router.get("/getAllProducts",ProductController.getAllProducts);
router.put("/updateProduct",ProductController.updateProduct);
router.delete("/deleteProduct",ProductController.deleteProductLogic);

export default router;
import { Router } from "express";
// import { createUser } from "./controller.js";
import {
  getAllProducts,
  createProduct,
  getSpecificProduct,
  getActive,
  getByPriceRange,
  update,
  deleteSpecificProduct,
  deleteAll,
} from "./service.js";
const productRouter = Router();

productRouter.post("/product", createProduct);
productRouter.get("/allproducts", getAllProducts);
productRouter.get("/products/:id", getSpecificProduct);
productRouter.get("/productsActive", getActive);
productRouter.get("/productsRange", getByPriceRange);
productRouter.put("/products/:id", update);
productRouter.delete("/products/:id", deleteSpecificProduct);
productRouter.delete("/allproducts", deleteAll);

export { productRouter };

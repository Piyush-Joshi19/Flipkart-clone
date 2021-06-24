import express from "express";
const router = express.Router();
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { addItemInCart } from "../controller/cartController.js";
import {
  addPaymentGateway,
  paymentResponse,
} from "../controller/paymentController.js";

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.get("/product", getProducts);
router.get("/product/:id", getProductById);

router.post("/payment", addPaymentGateway);

router.post("/cart/add", addItemInCart);
router.post("/callback", paymentResponse);
export default router;

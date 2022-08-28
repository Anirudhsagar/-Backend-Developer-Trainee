const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const ProductController = require("../controllers/productController");
const OrderController = require("../controllers/orderController");
const commonMW = require("../middlewares/commonMiddlewares.js");

router.post("/createProduct", ProductController.createProduct);

router.post("/createUser",  commonMW.statusCheck, UserController.createUser);               // commonMW.statusCheck,

router.post("/createOrder", commonMW.statusCheck, OrderController.createOrder);         //, commonMW.statusCheck

module.exports = router;

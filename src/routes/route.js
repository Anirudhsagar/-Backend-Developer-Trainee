const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController");
const {validateToken, checkIfAuthorized} = require("../middlewares/auth")

router.post("/users", userController.createUser  )     // this is a publuic api

router.post("/login", userController.loginUser)          // this is a public api 

//The userId is sent by front end            and this is authentication vs authorization api

router.get("/users/:userId", validateToken, checkIfAuthorized, userController.getUserData)               //checkIfAuthorized,

router.put("/users/:userId", validateToken, checkIfAuthorized, userController.updateUser)               //checkIfAuthorized,

router.delete("/users/:userId", validateToken, checkIfAuthorized, userController.deleteUser)             //checkIfAuthorized,

module.exports = router;
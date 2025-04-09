import express from "express";
import { signup, signin, signout } from "../controllers/authController.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Signin route
router.post("/signin", signin);

// Signout route
router.get("/signout", signout);

export default router;

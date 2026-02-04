import express from "express";
import {getUsers,createUser} from "../controllers/profile.controller.js";

const router=express.Router();

router.get("/",getUsers);
router.post("/",createUser);
export default router;
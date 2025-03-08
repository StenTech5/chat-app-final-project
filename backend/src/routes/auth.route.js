import express from "express"
import { checkAuth, login, logout, signup, updateProflie } from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.put("/update-profile", protectRoute, updateProflie)

router.get("/check", protectRoute, checkAuth)

export default router;
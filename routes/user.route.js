import express from "express"
import { deleteUser, getUser, getUsers, updateUserAdmin, updateUser } from "../controllers/user.controller.js"

const router = express.Router()

router.delete("/:id", deleteUser)
router.get("/:id", getUser)
router.get("/", getUsers)
router.get("/:id", updateUserAdmin)
router.get("/:id", updateUser)

export default router
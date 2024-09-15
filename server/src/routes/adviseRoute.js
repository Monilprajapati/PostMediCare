import { Router } from "express";
import { ROLES } from "../utils/constants.js";
const router = Router();
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { handleAddMessage, handleGetMessages } from "../controllers/adviseController.js";
router.route("/add-message").post(authMiddleware([ROLES.DOCTOR, ROLES.PATIENT]), handleAddMessage);
router.route("/get-messages").get(authMiddleware([ROLES.DOCTOR, ROLES.PATIENT]), handleGetMessages);

export default router;
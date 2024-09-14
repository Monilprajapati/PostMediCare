import { Router } from "express";
import { ROLES } from "../utils/constants.js";
const router = Router();
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { handleAddAdvice, handleGetAdvice, handleUpdateAdvice } from "../controllers/adviseController.js";

router.route("/add-advice").post(authMiddleware([ROLES.DOCTOR]), handleAddAdvice);
router.route("/get-advice").get(authMiddleware(ROLES), handleGetAdvice);
router.route("/update-advice").patch(authMiddleware([ROLES.DOCTOR]), handleUpdateAdvice);

export default router;
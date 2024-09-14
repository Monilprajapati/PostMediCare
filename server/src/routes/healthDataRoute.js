import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { handleAddHealthData, handleGetHealthData } from "../controllers/healthDataController.js";
import { ROLES } from "../utils/constants.js";

const router = Router();

router.route("/add").post(authMiddleware([ROLES.PATIENT]), handleAddHealthData);
router.route("/get").get(authMiddleware(ROLES), handleGetHealthData);

export default router;

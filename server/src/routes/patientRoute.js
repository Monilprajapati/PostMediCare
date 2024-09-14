import { Router } from "express";
const router = Router();
import {
    handleAddPatientDetails,
    handleGetPatientDetails,
    handleUpdatePatientDetails,
    handleHealthState,
    handleReadmissionRisk
} from "../controllers/patientController.js";
import { upload } from "../middlewares/multerMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { ROLES } from "../utils/constants.js";

router.route("/add-details").post(authMiddleware([ROLES.PATIENT]), upload.single('profilePicture'), handleAddPatientDetails);
router.route("/get-details").get(authMiddleware([ROLES.PATIENT]), handleGetPatientDetails);
router.route("/update-details").patch(authMiddleware([ROLES.PATIENT]), upload.single('profilePicture'), handleUpdatePatientDetails);
// router.route("/health-state").post(authMiddleware([ROLES.PATIENT]), handleHealthState);
// router.route("/readmission-risk").post(authMiddleware([ROLES.PATIENT]), handleReadmissionRisk);


export default router;
import { Router } from "express";
const router = Router();
import { ROLES } from "../utils/constants.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/multerMiddleware.js";
import { handleAddDoctorDetails, handleGetDoctorDetails, handleUpdateDoctorDetails, handleAddPatientByEmail } from "../controllers/doctorController.js";

router.route("/add-details").post(authMiddleware([ROLES.DOCTOR]), upload.single('profilePicture'), handleAddDoctorDetails);
router.route("/get-details").get(authMiddleware([ROLES.DOCTOR]), handleGetDoctorDetails);
router.route("/update-details").patch(authMiddleware([ROLES.DOCTOR]), upload.single('profilePicture'), handleUpdateDoctorDetails);
router.route("/add-patient-by-email").post(authMiddleware([ROLES.DOCTOR]), handleAddPatientByEmail); // New route

export default router;
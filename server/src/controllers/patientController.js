import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { Patient } from "../models/patientModel.js"


const handleAddPatientDetails = asyncHandler(async (req, res) => {

    const { race, gender, age, weight, time_in_hospital, num_lab_procedures, num_procedures, num_medications, number_outpatient, number_emergency, number_inpatient, diag_1, diag_2, diag_3, number_diagnoses, max_glu_serum, A1Cresult, medications, change, diabetesMed } = req.body;

    if (!userId || !race || !gender || !age || !weight || !time_in_hospital || !num_lab_procedures || !num_procedures || !num_medications || !number_outpatient || !number_emergency || !number_inpatient || !diag_1 || !number_diagnoses || !max_glu_serum || !A1Cresult || !medications || !change || !diabetesMed) {
        throw new ApiError(400, "All fields are required in handling add details");
    }

    const isPatientDetailsExists = await Patient.findOne({ userId: req.user._id });
    if (isPatientDetailsExists) {
        throw new ApiError(400, "Patient details already exists");
    }

    const imageLocalPath = req.file?.path;
    let imageUrl;

    if (imageLocalPath) {
        const result = await uploadOnCloudinary(imageLocalPath);
        if (!result) {
            throw new ApiError(500, "failed to upload image to cloudinary");
        }
        imageUrl = result?.secure_url;
    } else {
        // Set a default image URL if no image is uploaded
        imageUrl = "https://res.cloudinary.com/decx9fodo/image/upload/v1725823077/f332peuwjmcbwhyizxbu.jpg";
    }

    const newPatient = await Patient.create({
        userId: req.user._id,
        image: imageUrl,
        race,
        gender,
        age,
        weight,
        time_in_hospital,
        num_lab_procedures,
        num_procedures,
        num_medications,
        number_outpatient,
        number_emergency,
        number_inpatient,
        diag_1,
        diag_2,
        diag_3,
        number_diagnoses,
        max_glu_serum,
        A1Cresult,
        medications,
        change,
        diabetesMed
    });

    res.status(201).json(new ApiResponse(201, newPatient, "Patient details added successfully"));

});

const handleGetPatientDetails = asyncHandler(async (req, res) => {
    const patientDetails = await Patient.findOne({ userId: req.user._id });
    if (!patientDetails) {
        throw new ApiError(400, "Patient details not found");
    }
    res.status(200).json(new ApiResponse(200, patientDetails, "Patient details fetched successfully"));
});

const handleUpdatePatientDetails = asyncHandler(async (req, res) => {
    const updatedDetails = req.body;

    if (req.file) {
        const imageLocalPath = req.file.path;
        const result = await uploadOnCloudinary(imageLocalPath);
        if (!result) {
            throw new ApiError(500, "Failed to upload image to cloudinary");
        }
        updatedDetails.image = result.secure_url;
    }

    const updatedPatient = await Patient.findOneAndUpdate(
        { userId: req.user._id },
        updatedDetails,
        { new: true }
    );

    if (!updatedPatient) {
        throw new ApiError(404, "Patient details not found");
    }

    res.status(200).json(new ApiResponse(200, updatedPatient, "Patient details updated successfully"));
});

const handleHealthState = asyncHandler(async (req, res) => {

});

const handleReadmissionRisk = asyncHandler(async (req, res) => {

});

export {
    handleAddPatientDetails,
    handleGetPatientDetails,
    handleUpdatePatientDetails,
    handleHealthState,
    handleReadmissionRisk
};
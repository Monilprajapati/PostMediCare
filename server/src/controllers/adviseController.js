import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Advice } from "../models/adviseModel.js";

// Add advice
const handleAddAdvice = asyncHandler(async (req, res) => {
    const { patient, adviceText, precautions, medications } = req.body;

    if (!patient || !adviceText) {
        throw new ApiError(400, "Patient and advice text are required");
    }

    const newAdvice = await Advice.create({
        patient,
        doctor: req.user._id,
        adviceText,
        precautions,
        medications
    });

    res.status(201).json(new ApiResponse(201, newAdvice, "Advice added successfully"));
});

// Get advice
const handleGetAdvice = asyncHandler(async (req, res) => {
    const { patientId } = req.query;

    if (!patientId) {
        throw new ApiError(400, "Patient ID is required");
    }

    const advice = await Advice.find({ patient: patientId }).populate('doctor', 'name');

    if (!advice.length) {
        throw new ApiError(404, "No advice found for this patient");
    }

    res.status(200).json(new ApiResponse(200, advice, "Advice retrieved successfully"));
});

// Update advice
const handleUpdateAdvice = asyncHandler(async (req, res) => {
    const { adviceId } = req.params;
    const updatedDetails = req.body;

    if (!adviceId) {
        throw new ApiError(400, "Advice ID is required");
    }

    const updatedAdvice = await Advice.findByIdAndUpdate(adviceId, updatedDetails, { new: true });

    if (!updatedAdvice) {
        throw new ApiError(404, "Advice not found");
    }

    res.status(200).json(new ApiResponse(200, updatedAdvice, "Advice updated successfully"));
});

export {
    handleAddAdvice,
    handleGetAdvice,
    handleUpdateAdvice
};

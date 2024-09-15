import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Advice } from "../models/adviseModel.js";
import { Patient } from "../models/patientModel.js";
import { Doctor } from "../models/doctorModel.js";

// Add message to advice
const handleAddMessage = asyncHandler(async (req, res) => {
    const { message, patientId, doctorId } = req.body;
    const userId = req.user.id;
    const sender = req.user.role;

    if (!message) {
        throw new ApiError(400, "Message is required");
    }

    let query = {};
    if (sender === 'patient') {
        if (!doctorId) {
            throw new ApiError(400, "Doctor ID is required for patients");
        }
        query = { patient: userId, doctor: doctorId };
    } else if (sender === 'doctor') {
        if (!patientId) {
            throw new ApiError(400, "Patient ID is required for doctors");
        }
        query = { patient: patientId, doctor: userId };
    } else {
        throw new ApiError(400, "Invalid user role");
    }

    let advice = await Advice.findOne(query);

    if (!advice) {
        advice = new Advice(query);
    }

    advice.advises.push({ sender, message });
    await advice.save();

    res.status(201).json(new ApiResponse(201, advice, "Message added successfully"));
});

// Get all messages for advice
const handleGetMessages = asyncHandler(async (req, res) => {
    const { patientId, doctorId } = req.body;
    const userId = req.user.id;

    let query = {};
    if (req.user.role === 'patient') {
        if (!doctorId) {
            throw new ApiError(400, "Doctor ID is required for patients");
        }
        query = { patient: userId, doctor: doctorId };
    } else if (req.user.role === 'doctor') {
        if (!patientId) {
            throw new ApiError(400, "Patient ID is required for doctors");
        }
        query = { patient: patientId, doctor: userId };
    } else {
        throw new ApiError(400, "Invalid user role");
    }

    const advice = await Advice.findOne(query).populate('doctor', 'name').populate('patient', 'name');

    if (!advice) {
        throw new ApiError(404, "Advice not found");
    }

    res.status(200).json(new ApiResponse(200, advice.advises, "Messages retrieved successfully"));
});

export {
    handleAddMessage,
    handleGetMessages
};

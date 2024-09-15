import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { HealthData } from "../models/healthDataModel.js";

// Add health data
const handleAddHealthData = asyncHandler(async (req, res) => {
  const { bloodSugar, HbA1c, weight, height, BMI, bloodPressure } = req.body;

  if (!bloodSugar || !HbA1c || !weight || !height || !BMI || !bloodPressure) {
    throw new ApiError(400, "All fields are required");
  }

  const healthData = await HealthData.findOne({ patientId: req.user._id });

  const newEntry = {
    bloodSugar,
    HbA1c,
    weight,
    height,
    BMI,
    bloodPressure,
  };

  if (healthData) {
    healthData.entries.push(newEntry);
    await healthData.save();
  } else {
    await HealthData.create({
      patientId: req.user._id,
      entries: [newEntry],
    });
  }

  res.status(201).json(new ApiResponse(201, newEntry, "Health data added successfully"));
});

// Get health data for a patient
const handleGetHealthData = asyncHandler(async (req, res) => {
  const { patientId } = req.query;
  if (!patientId) {
    throw new ApiError(400, "Patient ID is required");
  }

  const healthData = await HealthData.findOne({ patientId });

  if (!healthData || !healthData.entries.length) {
    throw new ApiError(404, "No health data found for this patient");
  }

  res.status(200).json(new ApiResponse(200, healthData.entries, "Health data retrieved successfully"));
});

export {
  handleAddHealthData,
  handleGetHealthData,
};

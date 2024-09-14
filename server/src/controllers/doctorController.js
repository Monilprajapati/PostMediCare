import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Doctor } from "../models/doctorModel.js";


const handleAddDoctorDetails = asyncHandler(async (req, res) => {
    const { userId, phoneNumber, specialization, medicalLicenseNumber, yearsOfExperience, qualifications, affiliatedHospitals, clinicAddress, consultationHours, biography, languagesSpoken, consultationFees, telemedicineAvailability, status, socialMediaLinks, specialAchievements, memberships, emergencyContact } = req.body;

    if (!userId || !phoneNumber || !specialization || !medicalLicenseNumber || !yearsOfExperience || !qualifications || !affiliatedHospitals || !clinicAddress || !consultationHours) {
        throw new ApiError(400, "All required fields must be provided");
    }

    const isDoctorDetailsExists = await Doctor.findOne({ userId: req.user._id });
    if (isDoctorDetailsExists) {
        throw new ApiError(400, "Doctor details already exist");
    }

    const imageLocalPath = req.file?.path;
    let imageUrl;

    if (imageLocalPath) {
        const result = await uploadOnCloudinary(imageLocalPath);
        if (!result) {
            throw new ApiError(500, "Failed to upload image to cloudinary");
        }
        imageUrl = result?.secure_url;
    } else {
        // Set a default image URL if no image is uploaded
        imageUrl = "https://res.cloudinary.com/decx9fodo/image/upload/v1725823077/f332peuwjmcbwhyizxbu.jpg";
    }

    const newDoctor = await Doctor.create({
        userId: req.user._id,
        profilePicture: imageUrl,
        phoneNumber,
        specialization,
        medicalLicenseNumber,
        yearsOfExperience,
        qualifications,
        affiliatedHospitals,
        clinicAddress,
        consultationHours,
        biography,
        languagesSpoken,
        consultationFees,
        telemedicineAvailability,
        status,
        socialMediaLinks,
        specialAchievements,
        memberships,
        emergencyContact
    });

    res.status(201).json(new ApiResponse(201, newDoctor, "Doctor details added successfully"));
});

const handleGetDoctorDetails = asyncHandler(async (req, res) => {
    const doctorDetails = await Doctor.findOne({ userId: req.user._id });
    if (!doctorDetails) {
        throw new ApiError(404, "Doctor details not found");
    }
    res.status(200).json(new ApiResponse(200, doctorDetails, "Doctor details retrieved successfully"));
});

const handleUpdateDoctorDetails = asyncHandler(async (req, res) => {
    const updatedDetails = req.body;

    if (req.file) {
        const imageLocalPath = req.file.path;
        const result = await uploadOnCloudinary(imageLocalPath);
        if (!result) {
            throw new ApiError(500, "Failed to upload image to cloudinary");
        }
        updatedDetails.profilePicture = result.secure_url;
    }

    const updatedDoctor = await Doctor.findOneAndUpdate(
        { userId: req.user._id },
        updatedDetails,
        { new: true }
    );

    if (!updatedDoctor) {
        throw new ApiError(404, "Doctor details not found");
    }

    res.status(200).json(new ApiResponse(200, updatedDoctor, "Doctor details updated successfully"));
});

export {
    handleAddDoctorDetails,
    handleGetDoctorDetails,
    handleUpdateDoctorDetails
};


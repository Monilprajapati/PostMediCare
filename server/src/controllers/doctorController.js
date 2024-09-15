import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Doctor } from "../models/doctorModel.js";
import { Patient } from "../models/patientModel.js";
import { sendRegistrationMail } from "../utils/sendRegistrationMailer.js"; // Import the new mailer function
import { User } from "../models/userModel.js";
import { HealthData } from "../models/healthDataModel.js";

const handleAddDoctorDetails = asyncHandler(async (req, res) => {
    const { phoneNumber, specialization, medicalLicenseNumber, yearsOfExperience, qualifications, affiliatedHospitals, clinicAddress, consultationHours, biography, languagesSpoken, consultationFees, telemedicineAvailability, status, socialMediaLinks, specialAchievements, memberships, emergencyContact, patientEmails } = req.body;

    if (!phoneNumber || !specialization || !medicalLicenseNumber || !yearsOfExperience || !qualifications || !affiliatedHospitals || !clinicAddress || !consultationHours) {
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
        emergencyContact,
        patientEmails // Add patient emails
    });


    return res.status(201).json(new ApiResponse(201, newDoctor, "Doctor details added successfully"));
});

const handleGetDoctorDetails = asyncHandler(async (req, res) => {
    const doctorDetails = await Doctor.findOne({ userId: req.user._id });
    if (!doctorDetails) {
        throw new ApiError(404, "Doctor details not found");
    }
    return res.status(200).json(new ApiResponse(200, doctorDetails, "Doctor details retrieved successfully"));
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

    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
        throw new ApiError(404, "Doctor details not found");
    }

    // Append new emails to the existing patientEmails array if provided
    if (updatedDetails.patientEmails) {
        doctor.patientEmails = [...new Set([...doctor.patientEmails, ...updatedDetails.patientEmails])];
        delete updatedDetails.patientEmails; // Remove patientEmails from updatedDetails to avoid overwriting
    }

    // Update other attributes
    Object.assign(doctor, updatedDetails);
    const updatedDoctor = await doctor.save();

    return res.status(200).json(new ApiResponse(200, updatedDoctor, "Doctor details updated successfully"));
});

const handleAddPatientByEmail = asyncHandler(async (req, res) => {
    const { patientEmail } = req.body;

    if (!patientEmail) {
        throw new ApiError(400, "Patient email must be provided");
    }

    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
        throw new ApiError(404, "Doctor not found");
    }

    // Add the patient email to the patientEmails array if it doesn't already exist
    if (!doctor.patientEmails.includes(patientEmail)) {
        doctor.patientEmails.push(patientEmail);
        await doctor.save();
    }

    // Send registration email to the patient
    try {
        await sendRegistrationMail(patientEmail);
    } catch (error) {
        throw new ApiError(500, "Failed to send registration email");
    }

    return res.status(200).json(new ApiResponse(200, {}, "Patient email added and registration email sent successfully"));
});

const getMyPatients = asyncHandler(async (req, res) => {
    const doctor = await Doctor.findOne({ userId: req.user._id });
    if (!doctor) {
        throw new ApiError(404, "Doctor not found");
    }

    const patientEmails = doctor.patientEmails;
    const patients = await User.find({ email: { $in: patientEmails } }).select("-password");

    const patientsWithHealthData = await Promise.all(patients.map(async (patient) => {
        const healthData = await HealthData.findOne({ patientId: patient._id });
        return {
            ...patient.toObject(),
            healthData: healthData ? healthData.entries : []
        };
    }));

    return res.status(200).json(new ApiResponse(200, patientsWithHealthData, "Patients retrieved successfully"));
});

export {
    handleAddDoctorDetails,
    handleGetDoctorDetails,
    handleUpdateDoctorDetails,
    handleAddPatientByEmail,
    getMyPatients // Export the new function
};



import { Schema, model } from 'mongoose';


const DoctorSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    profilePicture: {
        type: String,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    medicalLicenseNumber: {
        type: String,
        required: true,
        unique: true
    },
    yearsOfExperience: {
        type: Number,
        required: true
    },
    qualifications: {
        type: [String],
        required: true
    },
    affiliatedHospitals: {
        type: [String],
        required: true
    },
    clinicAddress: {
        type: String,
        required: true
    },
    consultationHours: {
        type: String,
        required: true
    },
    biography: {
        type: String,
    },
    languagesSpoken: {
        type: [String],
    },
    consultationFees: {
        type: Number,
    },
    telemedicineAvailability: {
        type: Boolean,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
        required: true
    },
    socialMediaLinks: {
        type: [String],
    },
    specialAchievements: {
        type: [String],
    },
    memberships: {
        type: [String],
    },
    emergencyContact: {
        type: String,
    },
    patientEmails: {
        type: [String], // Store patient emails
        default: []
    }
}, {
    timestamps: true
});

export const Doctor = model('Doctor', DoctorSchema);

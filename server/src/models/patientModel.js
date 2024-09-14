import { Schema, model } from 'mongoose';


const PatientSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String, // Could use String for age ranges or Number for specific age
        required: true,
    },
    weight: {
        type: Number, // Store weight in kilograms
        required: true,
    },
    time_in_hospital: {
        type: Number,
        required: true,
    },
    num_lab_procedures: {
        type: Number,
        required: true,
    },
    num_procedures: {
        type: Number,
        required: true,
    },
    num_medications: {
        type: Number,
        required: true,
    },
    number_outpatient: {
        type: Number,
        required: true,
    },
    number_emergency: {
        type: Number,
        required: true,
    },
    number_inpatient: {
        type: Number,
        required: true,
    },
    diag_1: {
        type: String,
        required: true,
    },
    diag_2: {
        type: String,
    },
    diag_3: {
        type: String,
    },
    number_diagnoses: {
        type: Number,
        required: true,
    },
    max_glu_serum: {
        type: String,
        enum: ["None", ">200", ">300", "Normal"],
        required: true,
    },
    A1Cresult: {
        type: String,
        enum: ["None", "<7", ">7"],
        required: true,
    },
    medications: {
        metformin: { type: String, enum: ["Yes", "No"], required: true },
        insulin: { type: String, enum: ["Yes", "No"], required: true },
        other_medications: [
            {
                name: String,
                prescribed: { type: String, enum: ["Yes", "No"] },
            },
        ],
    },
    change: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
    },
    diabetesMed: {
        type: String,
        enum: ["Yes", "No"],
        required: true,
    },
}, {
    timestamps: true
});

export const Patient = model('Patient', PatientSchema);

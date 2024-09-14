import { Schema, model } from 'mongoose';


const PatientSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    myDoctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    weight: {
        type: Number, // Store weight in kilograms
        required: true,
    },
   
    age: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        enum: ['AfricanAmerican', 'Asian', 'Caucasian', 'Hispanic', 'Other'],
        required: true,
    },
    admissionSource: {
        type: [Number],
        required: true,
    },
    admissionType: {
        type: [Number],
        required: true,
    },
    dischargeDisposition: {
        type: [Number],
        required: true,
    },
    numLabProcedures: {
        type: Number,
        required: true,
    },
    numMedications: {
        type: Number,
        required: true,
    },
    changeInMedication: {
        type: String,
        required: true,
    },
    numDiagnoses: {
        type: Number,
        required: true,
    },
    numProcedures: {
        type: Number,
        required: true,
    },
    numOutpatientVisits: {
        type: Number,
        required: true,
    },
    numInpatientVisits: {
        type: Number,
        required: true,
    },
    numEmergencyVisits: {
        type: Number,
        required: true,
    },
    timeInHospital: {
        type: Number,
        required: true,
    },
    diagnosis1: {
        type: String,
        required: true,
    },
    diagnosis2: {
        type: String,
        required: true,
    },
    diagnosis3: {
        type: String,
        required: true,
    },
    maxGluSerum: {
        type: String,
        required: true,
    },
    A1Cresult: {
        type: String,
        required: true,
    },
    diabetesMed: {
        type: String,
        required: true,
    },
    metformin: {
        type: String,
        required: true,
    },
    insulin: {
        type: String,
        required: true,
    },
    glipizide: {
        type: String,
        required: true,
    },
    glyburide: {
        type: String,
        required: true,
    },
    pioglitazone: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

export const Patient = model('Patient', PatientSchema);

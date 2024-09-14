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
    },
    profilePicture: {
        type: String,
    },
    gender: {
        type: String,
    },
    weight: {
        type: Number, // Store weight in kilograms
    },
   
    age: {
        type: String,
    },
    race: {
        type: String,
    },
    admissionSource: {
        type: [Number],
    },
    admissionType: {
        type: [Number],
    },
    dischargeDisposition: {
        type: [Number],
    },
    numLabProcedures: {
        type: Number,
    },
    numMedications: {
        type: Number,
    },
    changeInMedication: {
        type: String,
    },
    numDiagnoses: {
        type: Number,
    },
    numProcedures: {
        type: Number,
    },
    numOutpatientVisits: {
        type: Number,
    },
    numInpatientVisits: {
        type: Number,
    },
    numEmergencyVisits: {
        type: Number,
    },
    timeInHospital: {
        type: Number,
    },
    diagnosis1: {
        type: String,
    },
    diagnosis2: {
        type: String,
    },
    diagnosis3: {
        type: String,
    },
    maxGluSerum: {
        type: String,
    },
    A1Cresult: {
        type: String,
    },
    diabetesMed: {
        type: String,
    },
    metformin: {
        type: String,
    },
    insulin: {
        type: String,
    },
    glipizide: {
        type: String,
    },
    glyburide: {
        type: String,
    },
    pioglitazone: {
        type: String,
    },
}, {
    timestamps: true
});

export const Patient = model('Patient', PatientSchema);

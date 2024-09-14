import { Schema, model } from 'mongoose';


const adviceSchema = new Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',  // References the Patient model
        required: true
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',  // References the Doctor model
        required: true
    },
    adviceText: {
        type: String,
        required: true  // Doctor's advice or recommendations
    },
    precautions: {
        type: [String],  // Array of precautions or recommendations
        default: []
    },
    medications: {
        type: [String],  // Medications prescribed or updated during the session
        default: []
    }
}, {
    timestamps: true
});

export const Advice = model('Advice', adviceSchema);

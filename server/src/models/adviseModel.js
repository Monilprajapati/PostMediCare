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
    advises: [
        {
            sender: {
                type: String,
                enum: ['doctor', 'patient'],
                required: true
            },
            message: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});

export const Advice = model('Advice', adviceSchema);

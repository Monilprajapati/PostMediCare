import { Schema, model } from 'mongoose';

const appointmentSchema = new Schema({
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
    appointmentDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],  // Current status of the appointment
        default: 'Scheduled'
    },
    reason: {
        type: String,
        required: true
    },
    notes: {
        type: String  // Any additional notes from the patient or doctor
    }
}, {
    timestamps: true
});

export const Appointment = model('Appointment', appointmentSchema);

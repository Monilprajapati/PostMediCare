import { Schema, model } from 'mongoose';

const HealthDataEntrySchema = new Schema({
  bloodSugar: Number,
  HbA1c: Number,
  weight: Number,
  height: Number,
  BMI: Number,
  bloodPressure: { systolic: Number, diastolic: Number },
  createdAt: { type: Date, default: Date.now },
});

const HealthDataSchema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  entries: [HealthDataEntrySchema],
});

export const HealthData = model('HealthData', HealthDataSchema);

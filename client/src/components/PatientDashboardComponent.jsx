import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useState } from 'react';

function PatientDashboardComponent() {
    const bmiData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'BMI',
            data: [22, 23, 21, 24, 22],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }]
    };

    const bpData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Blood Pressure',
            data: [120, 122, 118, 124, 120],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
        }]
    };

    const sugarData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Blood Sugar',
            data: [90, 88, 94, 90, 92],
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 1,
        }]
    };

    const hba1cData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'HbA1c',
            data: [5.5, 5.7, 5.4, 5.8, 5.5],
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    const [open, setOpen] = useState(false)

    return (
        <>
            <DialogBox open={open} setOpen={setOpen} />
            <div className="p-4 w-full h-screen">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold mb-4">Patient Dashboard</h1>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setOpen(true)}
                    >
                        Add Sample Data
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-4 h-[calc(100%-2rem)]">
                    <div className="h-full">
                        <Bar data={bmiData} options={options} />
                    </div>
                    <div className="h-full">
                        <Line data={bpData} options={options} />
                    </div>
                    <div className="h-full">
                        <Line data={sugarData} options={options} />
                    </div>
                    <div className="h-full">
                        <Line data={hba1cData} options={options} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default PatientDashboardComponent;




function DialogBox({ open, setOpen }) {

    const [medicalDetails, setMedicalDetails] = useState({
        bloodSugar: 0,
        HbA1c: 0,
        weight: 0,
        height: 0,
        BMI: 0,
        bloodPressure: { systolic: 0, diastolic: 0 },
    });

    const handleMedicalDetailsChange = (e) => {
        setMedicalDetails({
            ...medicalDetails,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                    >
                        <form className="p-8">
                            <h2 className="text-lg font-semibold mb-4">Medical Details</h2>
                            <h3 className="text-sm text-gray-600 mb-4">Feel free to skip this section if you do not have the information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="bloodSugar" className="block text-sm font-medium text-gray-700 mb-1">Blood Sugar</label>
                                    <input type="number" id="bloodSugar" name="bloodSugar" value={medicalDetails.bloodSugar} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>
                                <div>
                                    <label htmlFor="HbA1c" className="block text-sm font-medium text-gray-700 mb-1">HbA1c</label>
                                    <input type="number" id="HbA1c" name="HbA1c" value={medicalDetails.HbA1c} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" step="0.1" />
                                </div>
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                                    <input type="number" id="weight" name="weight" value={medicalDetails.weight} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>
                                <div>
                                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                                    <input type="number" id="height" name="height" value={medicalDetails.height} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                </div>
                                <div>
                                    <label htmlFor="BMI" className="block text-sm font-medium text-gray-700 mb-1">BMI</label>
                                    <input type="number" id="BMI" name="BMI" value={medicalDetails.BMI} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" step="0.1" />
                                </div>
                                <div>
                                    <label htmlFor="bloodPressureSystolic" className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure (Systolic)</label>
                                    <input type="number" id="bloodPressureSystolic" name="bloodPressure.systolic" value={medicalDetails.bloodPressure?.systolic} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                    <p className="text-xs text-gray-500 mt-1">Normal: Less than 120, High: 120 or higher</p>
                                </div>
                                <div>
                                    <label htmlFor="bloodPressureDiastolic" className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure (Diastolic)</label>
                                    <input type="number" id="bloodPressureDiastolic" name="bloodPressure.diastolic" value={medicalDetails.bloodPressure?.diastolic} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                                    <p className="text-xs text-gray-500 mt-1">Normal: Less than 80, High: 80 or higher</p>
                                </div>
                            </div>
                        </form>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                data-autofocus
                                onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}

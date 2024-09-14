/* eslint-disable react/prop-types */

function PatientMedicalDetailsForm({ handleNext, handlePrev, medicalDetails, setMedicalDetails }) {

    const handleMedicalDetailsChange = (e) => {
        setMedicalDetails({
            ...medicalDetails,
            [e.target.name]: e.target.value
        });
    }

    const sampleMedicalDetails = {
        bloodSugar: 120,
        HbA1c: 6.5,
        weight: 70,
        height: 170,
        BMI: 24.2,
        bloodPressure: { systolic: 120, diastolic: 80 },
    };

    const fillSampleMedicalDetails = () => {
        setMedicalDetails(sampleMedicalDetails);
    }

    return (
        <div>
            <form>
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
                <div className="mt-6 flex justify-between">
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        onClick={fillSampleMedicalDetails}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Fill Sample Medical Data
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PatientMedicalDetailsForm

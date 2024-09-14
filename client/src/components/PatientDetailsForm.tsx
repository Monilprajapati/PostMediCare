import React from 'react'

function PatientDetailsForm({ handleNext, patientDetails, setPatientDetails }) {

    const validatePatientDetails = () => {
        const fields = ['profilePicture', 'race', 'gender', 'age', 'weight'];
        return fields.every(field => patientDetails[field].trim() !== '');
    };

    const handlePatientDetailsChange = (e) => {
        setPatientDetails({
            ...patientDetails,
            [e.target.name]: e.target.value
        });
    }

    const samplePatientDetails = {
        profilePicture: 'https://media.licdn.com/dms/image/v2/D4D03AQGL15Jc510xGQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1708656343687?e=1731542400&v=beta&t=Dxg3ac3_bYavmDpt7jEswj-ryhXg5Poyl3l1xt0Ybgw',
        race: 'Asian',
        gender: 'male',
        age: '21',
        weight: '65',
    };

    const fillSamplePatientProfileDetails = () => {
        setPatientDetails(samplePatientDetails);
    }

    return (
        <div>
            <form>
                <h2 className="text-lg font-semibold mb-4">Patient Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 mb-1">Profile Picture URL</label>
                        <input type="text" id="profilePicture" name="profilePicture" value={patientDetails.profilePicture} onChange={handlePatientDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition duration-150 ease-in-out p-2" placeholder="Enter profile picture URL" />
                    </div>
                    <div>
                        <label htmlFor="race" className="block text-sm font-medium text-gray-700 mb-1">Race</label>
                        <select id="race" name="race" value={patientDetails.race} onChange={handlePatientDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select race</option>
                            <option value="Caucasian">Caucasian</option>
                            <option value="African American">African American</option>
                            <option value="Asian">Asian</option>
                            <option value="Hispanic">Hispanic</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select id="gender" name="gender" value={patientDetails.gender} onChange={handlePatientDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                        <input type="number" id="age" name="age" value={patientDetails.age} onChange={handlePatientDetailsChange} min="0" max="120" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter age" />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                        <input type="number" id="weight" name="weight" value={patientDetails.weight} onChange={handlePatientDetailsChange} min="0" step="0.1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter weight in kg" />
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        type="button"
                        onClick={() => {
                            fillSamplePatientProfileDetails()
                        }}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Fill Sample Details
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (validatePatientDetails()) {
                                handleNext()
                            }
                        }}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PatientDetailsForm

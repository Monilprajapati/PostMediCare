/* eslint-disable react/prop-types */

function PreviewPatientInfo({ handlePrev, patientDetails, medicalDetails, handleSubmit }) {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Preview of Patient Information
                </h2>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Patient Details</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                {Object.entries(patientDetails).map(([key, value]) => (
                                    key !== 'profilePicture' && (
                                        <li key={key} className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                            <div className="w-0 flex-1 flex items-center">
                                                <span className="ml-2 flex-1 w-0 truncate capitalize">{key.replace('_', ' ')}:</span>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <span className="font-medium overflow-x-hidden">{value}</span>
                                            </div>
                                        </li>
                                    )
                                ))}
                            </ul>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Medical Details</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">Blood Sugar:</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.bloodSugar}</span>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">HbA1c:</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.HbA1c}</span>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">Weight (kg):</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.weight}</span>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">Height (cm):</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.height}</span>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">BMI:</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.BMI}</span>
                                    </div>
                                </li>
                                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                                    <div className="w-0 flex-1 flex items-center">
                                        <span className="ml-2 flex-1 w-0 truncate">Blood Pressure:</span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <span className="font-medium">{medicalDetails.bloodPressure?.systolic}/{medicalDetails.bloodPressure?.diastolic}</span>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 mr-3"
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Submit Details
                </button>
            </div>
        </div>
    );
}

export default PreviewPatientInfo;

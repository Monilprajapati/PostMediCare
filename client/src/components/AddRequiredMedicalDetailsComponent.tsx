import React, { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'

const steps = [
    { id: '01', name: 'Patient Details', description: 'Basic patient information', href: '#', status: 'current' },
    { id: '02', name: 'Medical Details', description: 'Patient medical information', href: '#', status: 'upcoming' },
    { id: '03', name: 'Preview', description: 'Review all information', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function AddRequiredMedicalDetailsComponent() {
    const [currentStep, setCurrentStep] = useState(0);
    const [patientDetails, setPatientDetails] = useState({
        profilePicture: '',
        race: '',
        gender: '',
        age: '',
        weight: '',
    });
    const [medicalDetails, setMedicalDetails] = useState({
        time_in_hospital: 0,
        num_lab_procedures: 0,
        num_procedures: 0,
        num_medications: 0,
        number_outpatient: 0,
        number_emergency: 0,
        number_inpatient: 0,
        diag_1: '',
        diag_2: '',
        diag_3: '',
        number_diagnoses: 0,
        max_glu_serum: '',
        A1Cresult: '',
        metformin: '',
        insulin: '',
        change: '',
        diabetesMed: '',
    });

    const handleStepClick = (index) => {
        setCurrentStep(index);
    }

    const handlePatientDetailsChange = (e) => {
        setPatientDetails({
            ...patientDetails,
            [e.target.name]: e.target.value
        });
    }

    const handleMedicalDetailsChange = (e) => {
        setMedicalDetails({
            ...medicalDetails,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="lg:border-b lg:border-t lg:border-gray-200 mb-8">
                <nav aria-label="Progress" className="mx-auto max-w-7xl">
                    <ol
                        role="list"
                        className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
                    >
                        {steps.map((step, stepIdx) => (
                            <li key={step.id} className="relative overflow-hidden lg:flex-1">
                                <div
                                    className={classNames(
                                        stepIdx === 0 ? 'rounded-t-md border-b-0' : '',
                                        stepIdx === steps.length - 1 ? 'rounded-b-md border-t-0' : '',
                                        'overflow-hidden border border-gray-200 lg:border-0',
                                    )}
                                >
                                    {stepIdx < currentStep ? (
                                        <a href={step.href} className="group" onClick={() => handleStepClick(stepIdx)}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            />
                                            <span
                                                className={classNames(
                                                    stepIdx !== 0 ? 'lg:pl-9' : '',
                                                    'flex items-start px-6 py-5 text-sm font-medium',
                                                )}
                                            >
                                                <span className="flex-shrink-0">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600">
                                                        <CheckIcon aria-hidden="true" className="h-6 w-6 text-white" />
                                                    </span>
                                                </span>
                                                <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium">{step.name}</span>
                                                    <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                                </span>
                                            </span>
                                        </a>
                                    ) : stepIdx === currentStep ? (
                                        <a href={step.href} aria-current="step" onClick={() => handleStepClick(stepIdx)}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            />
                                            <span
                                                className={classNames(
                                                    stepIdx !== 0 ? 'lg:pl-9' : '',
                                                    'flex items-start px-6 py-5 text-sm font-medium',
                                                )}
                                            >
                                                <span className="flex-shrink-0">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600">
                                                        <span className="text-indigo-600">{step.id}</span>
                                                    </span>
                                                </span>
                                                <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium text-indigo-600">{step.name}</span>
                                                    <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                                </span>
                                            </span>
                                        </a>
                                    ) : (
                                        <a href={step.href} className="group" onClick={() => handleStepClick(stepIdx)}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                                            />
                                            <span
                                                className={classNames(
                                                    stepIdx !== 0 ? 'lg:pl-9' : '',
                                                    'flex items-start px-6 py-5 text-sm font-medium',
                                                )}
                                            >
                                                <span className="flex-shrink-0">
                                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                                                        <span className="text-gray-500">{step.id}</span>
                                                    </span>
                                                </span>
                                                <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                                                    <span className="text-sm font-medium text-gray-500">{step.name}</span>
                                                    <span className="text-sm font-medium text-gray-500">{step.description}</span>
                                                </span>
                                            </span>
                                        </a>
                                    )}

                                    {stepIdx !== 0 ? (
                                        <>
                                            {/* Separator */}
                                            <div aria-hidden="true" className="absolute inset-0 left-0 top-0 hidden w-3 lg:block">
                                                <svg
                                                    fill="none"
                                                    viewBox="0 0 12 82"
                                                    preserveAspectRatio="none"
                                                    className="h-full w-full text-gray-300"
                                                >
                                                    <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                                                </svg>
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            </li>
                        ))}
                    </ol>
                </nav>
            </div>
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                {currentStep === 0 && (
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
                                    <option value="caucasian">Caucasian</option>
                                    <option value="african-american">African American</option>
                                    <option value="asian">Asian</option>
                                    <option value="hispanic">Hispanic</option>
                                    <option value="other">Other</option>
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
                    </form>
                )}
                {currentStep === 1 && (
                    <form>
                        <h2 className="text-lg font-semibold mb-4">Medical Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="time_in_hospital" className="block text-sm font-medium text-gray-700 mb-1">Time in Hospital (days)</label>
                                <input type="number" id="time_in_hospital" name="time_in_hospital" value={medicalDetails.time_in_hospital} onChange={handleMedicalDetailsChange} min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter days in hospital" />
                            </div>
                            <div>
                                <label htmlFor="num_lab_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Lab Procedures</label>
                                <input type="number" id="num_lab_procedures" name="num_lab_procedures" value={medicalDetails.num_lab_procedures} onChange={handleMedicalDetailsChange} min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter number of lab procedures" />
                            </div>
                            <div>
                                <label htmlFor="num_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Procedures</label>
                                <input type="number" id="num_procedures" name="num_procedures" value={medicalDetails.num_procedures} onChange={handleMedicalDetailsChange} min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter number of procedures" />
                            </div>
                            <div>
                                <label htmlFor="num_medications" className="block text-sm font-medium text-gray-700 mb-1">Number of Medications</label>
                                <input type="number" id="num_medications" name="num_medications" value={medicalDetails.num_medications} onChange={handleMedicalDetailsChange} min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" placeholder="Enter number of medications" />
                            </div>
                            {/* Add more fields for other medical details */}
                        </div>
                    </form>
                )}
                {currentStep === 2 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Preview of all information</h2>
                        <div>
                            <h3 className="text-md font-medium mb-2">Patient Details</h3>
                            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">{JSON.stringify(patientDetails, null, 2)}</pre>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-md font-medium mb-2">Medical Details</h3>
                            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">{JSON.stringify(medicalDetails, null, 2)}</pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AddRequiredMedicalDetailsComponent

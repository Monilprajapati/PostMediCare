import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import PatientDetailsForm from './PatientDetailsForm';
import PatientMedicalDetailsForm from './PatientMedicalDetailsForm';
import PreviewPatientInfo from './PreviewPatientInfo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [medicalDetails, setMedicalDetails] = useState({
        bloodSugar: 0,
        HbA1c: 0,
        weight: 0,
        height: 0,
        BMI: 0,
        bloodPressure: { systolic: 0, diastolic: 0 },
    });

    const handleStepClick = (index) => {
        setCurrentStep(index);
    }

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    const handleSubmit = async () => {

        try {
            let age = patientDetails.age;
            if (age < 10) {
                age = '[0-10)';
            } else if (age < 20) {
                age = '[10-20)';
            } else if (age < 30) {
                age = '[20-30)';
            } else if (age < 40) {
                age = '[30-40)';
            } else if (age < 50) {
                age = '[40-50)';
            } else if (age < 60) {
                age = '[50-60)';
            } else if (age < 70) {
                age = '[60-70)';
            } else if (age < 80) {
                age = '[70-80)';
            } else if (age < 90) {
                age = '[80-90)';
            } else {
                age = '[90-100)';
            }
            const newPatientDetails = {
                race: patientDetails.race,
                gender: patientDetails.gender,
                age: age,
                weight: patientDetails.weight,
            }
            setIsLoading(true);
            await axios.post(import.meta.env.VITE_SERVER_URL + '/api/v1/patient/add-details', newPatientDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            // const data = await response.data.data;
            // console.log(data);

            await axios.post(import.meta.env.VITE_SERVER_URL + '/api/v1/health-data/add', medicalDetails, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            });
            setIsLoading(false);
            navigate("/patient-dashboard");
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            navigate("/patient-dashboard");
        }
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
                    <PatientDetailsForm
                        handleNext={handleNext}
                        patientDetails={patientDetails}
                        setPatientDetails={setPatientDetails}
                    />
                )}
                {currentStep === 1 && (
                    <PatientMedicalDetailsForm
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        medicalDetails={medicalDetails}
                        setMedicalDetails={setMedicalDetails}
                    />
                )}
                {currentStep === 2 && (
                    <PreviewPatientInfo
                        handlePrev={handlePrev}
                        patientDetails={patientDetails}
                        medicalDetails={medicalDetails}
                        handleSubmit={handleSubmit}
                        isLoading={isLoading}
                    />
                )}
            </div>
        </div>
    )
}

export default AddRequiredMedicalDetailsComponent

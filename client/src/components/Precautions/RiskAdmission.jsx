import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI('AIzaSyCjZPbRiJ0BRuzX5vfmoB5_v4lR6_mc0j4');

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
    generationConfig: {
        responseMimeType: "application/json"
    },
});

async function checkRisk(medicalDetails) {
    const prompt = `
            The patient's medical details have been analyzed, and the predictive model has identified them as being at high risk of re-admission due to diabetes complications. Immediate and effective communication is crucial to ensure the patient takes necessary precautions and seeks appropriate medical advice.
            The color of the risk level is as follows (Please return the color in hex format):
            - Green: Low risk
            - Yellow: Medium risk
            - Red: High risk
            Values : ${JSON.stringify(medicalDetails)}
            You need to return a JSON object with the following structure:
            {
            "risk_level": "",
            "message": "",
            "precautions": [
                {
                    "title": "",
                    "description": "",
                    "frequency": "",
                    "tools": "",
                    "color": ""
                },
                {
                    "title": "",
                    "description": "",
                    "note": "",
                    "color": ""
                },
                {
                    "title": "",
                    "description": "",
                    "diet_tips": "",
                    "exercise_recommendation": "",
                    "color": ""
                },
                {
                    "title": "",
                    "description": "",
                    "urgency": "",
                    "color": ""
                },
                {
                    "title": "",
                    "description": "",
                    "hydration_tip": "",
                    "rest_tip": "",
                    "color": ""
                }
            ],
            "additional_notes": ""
        }
    `;
    const result = await model.generateContent(prompt);
    console.log(JSON.parse(result.response.text()));
    return JSON.parse(result.response.text());
}

export default function RiskAdmission() {

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
        glipizide: '',
        glyburide: '',
        pioglitazone: '',
        diabetesMed: '',
    });
    const [riskResponse, setRiskResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleMedicalDetailsChange = (e) => {
        setIsLoading(true);
        setMedicalDetails({
            ...medicalDetails,
            [e.target.name]: e.target.value
        });
        setIsLoading(false);
    }

    const sampleMedicalDetails = {
        age: "[50-60)",
        race: 'Caucasian',

        time_in_hospital: 1,
        num_lab_procedures: 2,
        num_procedures: 3,
        num_medications: 4,
        number_inpatient: 3,
        number_outpatient: 2,
        number_emergency: 1,
        diag_1: '390-459',
        diag_2: '240-279',
        diag_3: '280-289',
        number_diagnoses: 3,
        max_glu_serum: '>200',
        A1Cresult: 'Norm',
        metformin: 'No',
        insulin: 'No',
        glipizide: 'No',
        glyburide: 'No',
        pioglitazone: 'No',
        change: 'No',
        diabetesMed: 'No',
    };

    const fillSampleMedicalDetails = () => {
        setMedicalDetails(sampleMedicalDetails);
    }

    const handleRiskResponse = async () => {
        const result = await checkRisk(medicalDetails);
        setRiskResponse(result);

        try {
            const response = await fetch('http://localhost:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(sampleMedicalDetails)
            })
            const data = await response.json();
            // setRiskResponse(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="flex">
            <form className="w-full">
                <h2 className="text-lg font-semibold mb-4">Medical Details</h2>
                <h3 className="text-sm text-gray-600 mb-4">Fell free to skip this section if you do not have the information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="num_lab_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Lab Procedures</label>
                        <input type="number" id="num_lab_procedures" name="num_lab_procedures" value={medicalDetails.num_lab_procedures} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="num_medications" className="block text-sm font-medium text-gray-700 mb-1">Number of Medications</label>
                        <input type="number" id="num_medications" name="num_medications" value={medicalDetails.num_medications} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="change" className="block text-sm font-medium text-gray-700 mb-1">Change in Diabetic Medications</label>
                        <select id="change" name="change" value={medicalDetails.change} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select change status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="number_emergency" className="block text-sm font-medium text-gray-700 mb-1">Number of Emergency Visits</label>
                        <input type="number" id="number_emergency" name="number_emergency" value={medicalDetails.number_emergency} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="time_in_hospital" className="block text-sm font-medium text-gray-700 mb-1">Time in Hospital</label>
                        <input type="number" id="time_in_hospital" name="time_in_hospital" value={medicalDetails.time_in_hospital} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="number_inpatient" className="block text-sm font-medium text-gray-700 mb-1">Number of Inpatient Visits</label>
                        <input type="number" id="number_inpatient" name="number_inpatient" value={medicalDetails.number_inpatient} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="number_outpatient" className="block text-sm font-medium text-gray-700 mb-1">Number of Outpatient Visits</label>
                        <input type="number" id="number_outpatient" name="number_outpatient" value={medicalDetails.number_outpatient} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="num_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Procedures</label>
                        <input type="number" id="num_procedures" name="num_procedures" value={medicalDetails.num_procedures} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="number_diagnoses" className="block text-sm font-medium text-gray-700 mb-1">Number of Diagnoses</label>
                        <input type="number" id="number_diagnoses" name="number_diagnoses" value={medicalDetails.number_diagnoses} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="diag_1" className="block text-sm font-medium text-gray-700 mb-1">Primary Diagnosis</label>
                        <select id="diag_1" name="diag_1" value={medicalDetails.diag_1} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select primary diagnosis</option>
                            <option value="001-139">001-139</option>
                            <option value="140-239">140-239</option>
                            <option value="240-279">240-279</option>
                            <option value="280-289">280-289</option>
                            <option value="290-319">290-319</option>
                            <option value="320-389">320-389</option>
                            <option value="390-459">390-459</option>
                            <option value="460-519">460-519</option>
                            <option value="520-579">520-579</option>
                            <option value="580-629">580-629</option>
                            <option value="630-679">630-679</option>
                            <option value="680-709">680-709</option>
                            <option value="710-739">710-739</option>
                            <option value="740-759">740-759</option>
                            <option value="760-779">760-779</option>
                            <option value="780-799">780-799</option>
                            <option value="800-999">800-999</option>
                            <option value="E and V codes">E and V codes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="diag_2" className="block text-sm font-medium text-gray-700 mb-1">Secondary Diagnosis</label>
                        <select id="diag_2" name="diag_2" value={medicalDetails.diag_2} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select secondary diagnosis</option>
                            <option value="001-139">001-139</option>
                            <option value="140-239">140-239</option>
                            <option value="240-279">240-279</option>
                            <option value="280-289">280-289</option>
                            <option value="290-319">290-319</option>
                            <option value="320-389">320-389</option>
                            <option value="390-459">390-459</option>
                            <option value="460-519">460-519</option>
                            <option value="520-579">520-579</option>
                            <option value="580-629">580-629</option>
                            <option value="630-679">630-679</option>
                            <option value="680-709">680-709</option>
                            <option value="710-739">710-739</option>
                            <option value="740-759">740-759</option>
                            <option value="760-779">760-779</option>
                            <option value="780-799">780-799</option>
                            <option value="800-999">800-999</option>
                            <option value="E and V codes">E and V codes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="diag_3" className="block text-sm font-medium text-gray-700 mb-1">Additional Diagnosis</label>
                        <select id="diag_3" name="diag_3" value={medicalDetails.diag_3} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select additional diagnosis</option>
                            <option value="001-139">001-139</option>
                            <option value="140-239">140-239</option>
                            <option value="240-279">240-279</option>
                            <option value="280-289">280-289</option>
                            <option value="290-319">290-319</option>
                            <option value="320-389">320-389</option>
                            <option value="390-459">390-459</option>
                            <option value="460-519">460-519</option>
                            <option value="520-579">520-579</option>
                            <option value="580-629">580-629</option>
                            <option value="630-679">630-679</option>
                            <option value="680-709">680-709</option>
                            <option value="710-739">710-739</option>
                            <option value="740-759">740-759</option>
                            <option value="760-779">760-779</option>
                            <option value="780-799">780-799</option>
                            <option value="800-999">800-999</option>
                            <option value="E and V codes">E and V codes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="max_glu_serum" className="block text-sm font-medium text-gray-700 mb-1">Max Glucose Serum</label>
                        <select id="max_glu_serum" name="max_glu_serum" value={medicalDetails.max_glu_serum} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select max glucose serum</option>
                            <option value="Norm">Norm</option>
                            <option value=">200">&gt;200</option>
                            <option value=">300">&gt;300</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="A1Cresult" className="block text-sm font-medium text-gray-700 mb-1">A1C Result</label>
                        <select id="A1Cresult" name="A1Cresult" value={medicalDetails.A1Cresult} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select A1C result</option>
                            <option value="Norm">Norm</option>
                            <option value=">7">&gt;7</option>
                            <option value=">8">&gt;8</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="metformin" className="block text-sm font-medium text-gray-700 mb-1">Metformin</label>
                        <select id="metformin" name="metformin" value={medicalDetails.metformin} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select metformin status</option>
                            <option value="No">No</option>
                            <option value="Up">Up</option>
                            <option value="Steady">Steady</option>
                            <option value="Down">Down</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="insulin" className="block text-sm font-medium text-gray-700 mb-1">Insulin</label>
                        <select id="insulin" name="insulin" value={medicalDetails.insulin} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select insulin status</option>
                            <option value="No">No</option>
                            <option value="Up">Up</option>
                            <option value="Steady">Steady</option>
                            <option value="Down">Down</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="change" className="block text-sm font-medium text-gray-700 mb-1">Change in Diabetic Medications</label>
                        <select id="change" name="change" value={medicalDetails.change} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select change status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="diabetesMed" className="block text-sm font-medium text-gray-700 mb-1">Diabetes Medications</label>
                        <select id="diabetesMed" name="diabetesMed" value={medicalDetails.diabetesMed} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select diabetes medications status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="glipizide" className="block text-sm font-medium text-gray-700 mb-1">Glipizide</label>
                        <select id="glipizide" name="glipizide" value={medicalDetails.glipizide} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select glipizide status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                            <option value="Steady">Steady</option>
                            <option value="Down">Down</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="glyburide" className="block text-sm font-medium text-gray-700 mb-1">Glyburide</label>
                        <select id="glyburide" name="glyburide" value={medicalDetails.glyburide} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select glyburide status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                            <option value="Steady">Steady</option>
                            <option value="Down">Down</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pioglitazone" className="block text-sm font-medium text-gray-700 mb-1">Pioglitazone</label>
                        <select id="pioglitazone" name="pioglitazone" value={medicalDetails.pioglitazone} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2">
                            <option value="">Select pioglitazone status</option>
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                            <option value="Steady">Steady</option>
                            <option value="Down">Down</option>
                        </select>
                    </div>
                </div>
                <div className="mt-6 flex justify-between">
                    <button
                        type="button"
                        onClick={fillSampleMedicalDetails}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Fill Sample Medical Data
                    </button>
                    <button
                        onClick={handleRiskResponse}
                        type="button"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Check Risk
                    </button>
                </div>
            </form>
            <div className="w-full ml-4 p-4 border rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">Risk Assessment</h3>
                {isLoading ? (
                    <div className="text-sm text-gray-500 p-3 border border-gray-300 rounded">
                        Loading risk assessment...
                    </div>
                ) : riskResponse ? (
                    <div className="text-sm text-gray-800 mt-4 p-4 border border-gray-400 rounded-lg">
                        <p className="mb-2 bg-red-200 p-2 rounded-md flex items-center justify-center cursor-pointer select-all">
                            <strong className="text-gray-800s text-lg">RISK LEVEL:</strong> 
                            <span className=" text-red-600 font-bold text-lg ml-2 cursor-pointer select-all">{riskResponse.risk_level.toUpperCase()}</span>
                        </p>
                        <p className="mb-2"><strong className="text-black">Precautions:</strong></p>
                        <ul className="mt-2 space-y-2">
                            {riskResponse.precautions && riskResponse.precautions.map((precaution, index) => (
                                <li key={index} className="p-3 bg-gray-100 rounded-md">
                                    <h4 className="font-semibold text-black mb-1">{precaution.title}</h4>
                                    <p className="text-gray-700">{precaution.description}</p>
                                    {precaution.frequency && <p className="text-gray-600 mt-1">Frequency: {precaution.frequency}</p>}
                                    {precaution.tools && <p className="text-gray-600 mt-1">Tools: {precaution.tools}</p>}
                                    {precaution.note && <p className="text-gray-600 mt-1">Note: {precaution.note}</p>}
                                    {precaution.diet_tips && <p className="text-gray-600 mt-1">Diet Tips: {precaution.diet_tips}</p>}
                                    {precaution.exercise_recommendation && <p className="text-gray-600 mt-1">Exercise: {precaution.exercise_recommendation}</p>}
                                    {precaution.urgency && <p className="text-gray-600 mt-1">Urgency: {precaution.urgency}</p>}
                                    {precaution.hydration_tip && <p className="text-gray-600 mt-1">Hydration Tips: {precaution.hydration_tip}</p>}
                                    {precaution.rest_tip && <p className="text-gray-600 mt-1">Rest Tips: {precaution.rest_tip}</p>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="text-sm text-gray-500 p-3 border border-gray-300 rounded">
                        No risk assessment available. Please submit the form to check.
                    </div>
                )}
            </div>
        </div>
    )
}
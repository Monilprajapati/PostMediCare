/* eslint-disable react/prop-types */

function PatientMedicalDetailsForm({ handleNext, handlePrev, medicalDetails, setMedicalDetails }) {

    const handleMedicalDetailsChange = (e) => {
        setMedicalDetails({
            ...medicalDetails,
            [e.target.name]: e.target.value
        });
    }

    const sampleMedicalDetails = {
        time_in_hospital: 7,
        num_lab_procedures: 15,
        num_procedures: 4,
        num_medications: 6,
        number_inpatient: 1,
        number_outpatient: 2,
        number_emergency: 1,
        diag_1: '390-459',
        diag_2: '240-279',
        diag_3: '280-289',
        number_diagnoses: 3,
        max_glu_serum: '>200',
        A1Cresult: '>7',
        metformin: 'Up',
        insulin: 'Steady',
        glipizide: 'No',
        glyburide: 'No',
        pioglitazone: 'No',
        change: 'Yes',
        diabetesMed: 'Yes',
    };

    const fillSampleMedicalDetails = () => {
        setMedicalDetails(sampleMedicalDetails);
    }

    return (
        <div>
            <form>
                <h2 className="text-lg font-semibold mb-4">Medical Details</h2>
                <h3 className="text-sm text-gray-600 mb-4">Fell free to skip this section if you do not have the information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Existing input fields for time_in_hospital, num_lab_procedures, num_procedures, num_medications, number_outpatient, number_emergency, number_inpatient, number_diagnoses remain unchanged */}

                    <div>
                        <label htmlFor="num_lab_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Lab Procedures</label>
                        <input type="number" id="num_lab_procedures" name="num_lab_procedures" value={medicalDetails.num_lab_procedures} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    <div>
                        <label htmlFor="num_medications" className="block text-sm font-medium text-gray-700 mb-1">Number of Medications</label>
                        <input type="number" id="num_medications" name="num_medications" value={medicalDetails.num_medications} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* change */}
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
                    {/* time_in_hospital */}
                    <div>
                        <label htmlFor="time_in_hospital" className="block text-sm font-medium text-gray-700 mb-1">Time in Hospital</label>
                        <input type="number" id="time_in_hospital" name="time_in_hospital" value={medicalDetails.time_in_hospital} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* number_inpatient */}
                    <div>
                        <label htmlFor="number_inpatient" className="block text-sm font-medium text-gray-700 mb-1">Number of Inpatient Visits</label>
                        <input type="number" id="number_inpatient" name="number_inpatient" value={medicalDetails.number_inpatient} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* number_outpatient */}
                    <div>
                        <label htmlFor="number_outpatient" className="block text-sm font-medium text-gray-700 mb-1">Number of Outpatient Visits</label>
                        <input type="number" id="number_outpatient" name="number_outpatient" value={medicalDetails.number_outpatient} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* num_procedures */}
                    <div>
                        <label htmlFor="num_procedures" className="block text-sm font-medium text-gray-700 mb-1">Number of Procedures</label>
                        <input type="number" id="num_procedures" name="num_procedures" value={medicalDetails.num_procedures} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* number_diagnoses */}
                    <div>
                        <label htmlFor="number_diagnoses" className="block text-sm font-medium text-gray-700 mb-1">Number of Diagnoses</label>
                        <input type="number" id="number_diagnoses" name="number_diagnoses" value={medicalDetails.number_diagnoses} onChange={handleMedicalDetailsChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2" />
                    </div>
                    {/* diag_1 */}
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

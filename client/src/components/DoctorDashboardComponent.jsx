import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaHeartbeat, FaWeight, FaSyringe, FaRulerVertical } from 'react-icons/fa';

const DoctorDashboardComponent = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [patientData, setPatientData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  async function getDoctorPatients() {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/v1/doctor/get-my-patients`, { withCredentials: true });
      return response.data.data;
    } catch (error) {
      console.log('error', error);
      setLoading(false);
      return [];
    }
  }

  useEffect(() => {
    getDoctorPatients().then((data) => {
      console.log('data', data);
      setPatientData(data);
      setLoading(false);
    });
  }, []);

  const handleCardClick = (id) => {
    navigate(`/doctor-dashboard/patient/${id}`);
  };

  if (loading) {
    return <div className="w-full h-screen flex items-center justify-center">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 border-t-blue-500 border-b-transparent border-r-transparent border-l-transparent rounded-full" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>;
  }

  return (
    <>
      <DialogBox open={open} setOpen={setOpen} />

      <div className="bg-gray-100 p-8 rounded-2xl shadow-2xl border border-gray-300">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Your Patients
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
          >
            Add Patient
          </button>
        </div>
        <div className="w-full h-full flex flex-col gap-8 overflow-y-auto">
          {patientData.map((patient) => (
            <div
              key={patient._id}
              className="bg-white p-8 border border-gray-200 w-full shadow-xl rounded-xl flex items-center cursor-pointer hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-102"
              onClick={() => handleCardClick(patient._id)}
            >
              <div className="flex flex-col justify-center w-full space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {patient.firstname} {patient.lastname}
                </h2>
                <p className="text-lg text-gray-700">Email: {patient.email}</p>
                {patient.healthData && patient.healthData.length > 0 ? (
                  <div className="bg-gray-50 p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Health Overview</h3>
                    <ul className="grid grid-cols-2 gap-6">
                      <li className="text-gray-800 font-medium flex items-center space-x-3">
                        <FaHeartbeat className="text-red-600 text-2xl" />
                        <span>
                          Blood Pressure:
                          <span className={patient.healthData[patient.healthData.length - 1].bloodPressure ? "text-red-600 ml-2" : "text-gray-500 ml-2"}>
                            {patient.healthData[patient.healthData.length - 1].bloodPressure ? `${patient.healthData[patient.healthData.length - 1].bloodPressure.systolic}/${patient.healthData[patient.healthData.length - 1].bloodPressure.diastolic} mmHg` : "N/A"}
                          </span>
                        </span>
                      </li>
                      <li className="text-gray-800 font-medium flex items-center space-x-3">
                        <FaSyringe className="text-blue-600 text-2xl" />
                        <span>
                          Blood Sugar:
                          <span className={patient.healthData[patient.healthData.length - 1].bloodSugar ? "text-blue-600 ml-2" : "text-gray-500 ml-2"}>
                            {patient.healthData[patient.healthData.length - 1].bloodSugar || "N/A"}
                          </span>
                        </span>
                      </li>
                      <li className="text-gray-800 font-medium flex items-center space-x-3">
                        <FaRulerVertical className="text-green-600 text-2xl" />
                        <span>
                          HbA1c:
                          <span className={patient.healthData[patient.healthData.length - 1].HbA1c ? "text-green-600 ml-2" : "text-gray-500 ml-2"}>
                            {patient.healthData[patient.healthData.length - 1].HbA1c || "N/A"}%
                          </span>
                        </span>
                      </li>
                      <li className="text-gray-800 font-medium flex items-center space-x-3">
                        <FaWeight className="text-yellow-600 text-2xl" />
                        <span>
                          BMI:
                          <span className={patient.healthData[patient.healthData.length - 1].BMI ? "text-yellow-600 ml-2" : "text-gray-500 ml-2"}>
                            {patient.healthData[patient.healthData.length - 1].BMI || "N/A"}
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="text-lg text-gray-600 font-medium italic">Health Data: Not Available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DoctorDashboardComponent;

export function DialogBox({ open, setOpen }) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function addPatientToDoctorByEmail(email) {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/doctor/add-patient-by-email`,
      { patientEmail: email },
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      },
    );
    return response.data;
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await addPatientToDoctorByEmail(email);
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <DialogBackdrop />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <form
              className="p-8"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border border-black/25"
                  required
                />
              </div>
            </form>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                {loading ? "Loading..." : "Add"}
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
  );
}

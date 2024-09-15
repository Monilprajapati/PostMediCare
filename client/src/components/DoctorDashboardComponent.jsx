import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const patientData = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://via.placeholder.com/150",
    age: 25,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://via.placeholder.com/150",
    age: 35,
  },
  {
    id: 3,
    name: "Michael Johnson",
    photo: "https://via.placeholder.com/150",
    age: 40,
  },
  {
    id: 4,
    name: "Sarah Brown",
    photo: "https://via.placeholder.com/150",
    age: 30,
  },
  // Add more doctor data as needed
];

const DoctorDashboardComponent = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleCardClick = (id) => {
    navigate(`/doctor-dashboard/patient/${id}`);
  };

  return (
    <>
      <DialogBox open={open} setOpen={setOpen} />

      <div className="w-full h-screen p-8 bg-gray-100 px-10">
        <div className="flex items-center justify-between py-4 px-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Your patients
          </h1>
          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Patient
          </button>
        </div>
        <div className="w-full h-full flex flex-col gap-6 overflow-y-auto mt-4">
          {patientData.map((patient) => (
            <div
              key={patient.id}
              className="w-full bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleCardClick(patient.id)}
            >
              <img
                src={patient.photo}
                alt={patient.name}
                className="w-32 h-32 object-cover rounded-l-lg"
              />
              <div className="p-6 flex flex-col justify-center w-full">
                <h2 className="text-xl font-semibold text-gray-800">
                  {patient.name}
                </h2>
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

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  async function addPatientToDoctorByEmail(email) {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/v1/add-patient-by-email`, { patientEmail: email });
    return response.data;
  }

  const handleSubmit = async () => {
    await addPatientToDoctorByEmail(email);
    setOpen(false);
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
  );
}

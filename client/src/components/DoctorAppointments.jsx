import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [description, setDescription] = useState('');
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState(null);
  const [price, setPrice] = useState(100);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(storedAppointments);
  }, []);

  const updateLocalStorage = (updatedAppointments) => {
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const addSlot = () => {
    if (newSlot) {
      setSlots([...slots, newSlot]);
      setNewSlot(null);
    }
  };

  const removeSlot = (index) => {
    const updatedSlots = slots.filter((_, i) => i !== index);
    setSlots(updatedSlots);
  };

  const handleSave = () => {
    const newAppointment = { description, slots, price };
    let updatedAppointments;
    if (editIndex !== null) {
      updatedAppointments = [...appointments];
      updatedAppointments[editIndex] = newAppointment;
    } else {
      updatedAppointments = [...appointments, newAppointment];
    }
    setAppointments(updatedAppointments);
    updateLocalStorage(updatedAppointments);
    resetForm();
  };

  const handleEdit = (index) => {
    const appointmentToEdit = appointments[index];
    setDescription(appointmentToEdit.description);
    setSlots(appointmentToEdit.slots);
    setPrice(appointmentToEdit.price);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    updateLocalStorage(updatedAppointments);
  };

  const resetForm = () => {
    setDescription('');
    setSlots([]);
    setPrice(100);
    setEditIndex(null);
  };

  return (
    <div className="w-full min-h-screen p-8 flex flex-col">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Set Appointment Details</h2>

      <div className="flex-grow flex flex-col gap-8">
        <div className="flex flex-col">
          <label className="text-xl font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full p-4 text-lg border border-gray-300 rounded-md resize-none h-32"
            placeholder="Enter appointment description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xl font-semibold text-gray-700 mb-2">Available Slots</label>
          <div className="flex items-center">
            <DatePicker
              selected={newSlot}
              onChange={(date) => setNewSlot(date)}
              showTimeSelect
              dateFormat="Pp"
              placeholderText="Select a time slot"
              className="flex-grow p-4 text-lg border border-gray-300 rounded-md"
            />
            <button
              className="ml-4 px-6 py-3 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={addSlot}
            >
              Add Slot
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Added Slots</h3>
          {slots.length === 0 ? (
            <p className="text-gray-600">No slots added yet.</p>
          ) : (
            <ul className="space-y-3">
              {slots.map((slot, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-white rounded-md shadow">
                  <span className="text-lg">{new Date(slot).toLocaleString()}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeSlot(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-xl font-semibold text-gray-700 mb-2">Price (₹)</label>
          <input
            type="range"
            min="50"
            max="500"
            step="10"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />
          <div className="text-lg mt-2">Price: ₹{price}</div>
        </div>

        <div className="mt-8">
          <button
            className="w-full py-4 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600"
            onClick={handleSave}
          >
            {editIndex !== null ? 'Update Appointment' : 'Save Appointment'}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Saved Appointments</h3>
        {appointments.length === 0 ? (
          <p className="text-gray-600">No appointments saved yet.</p>
        ) : (
          <ul className="space-y-4">
            {appointments.map((appointment, index) => (
              <li key={index} className="bg-white p-4 rounded-md shadow">
                <p className="text-lg font-semibold">{appointment.description}</p>
                <p>Price: ₹{appointment.price}</p>
                <p>Slots: {appointment.slots.map(slot => new Date(slot).toLocaleString()).join(', ')}</p>
                <div className="mt-2">
                  <button
                    className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;

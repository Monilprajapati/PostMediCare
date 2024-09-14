import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Install react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import styling for the date picker

const DoctorAppointments = () => {
  const [description, setDescription] = useState('');
  const [slots, setSlots] = useState([]);
  const [newSlot, setNewSlot] = useState(null); // To hold DateTime for the slot
  const [price, setPrice] = useState(100); // Default price value

  // Add a new slot to the array
  const addSlot = () => {
    if (newSlot) {
      setSlots([...slots, newSlot]);
      setNewSlot(null); // Clear the date picker after adding the slot
    }
  };

  // Remove a slot from the array
  const removeSlot = (index) => {
    const updatedSlots = slots.filter((_, i) => i !== index);
    setSlots(updatedSlots);
  };

  return (
    <div className="w-full h-screen p-8 flex flex-col bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Set Appointment Details</h2>
      
      <div className="flex-grow flex flex-col gap-8">
        {/* Appointment Description */}
        <div className="flex flex-col">
          <label className="text-xl font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            className="w-full p-4 text-lg border border-gray-300 rounded-md resize-none h-32"
            placeholder="Enter appointment description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Available Slots (Using DatePicker) */}
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

        {/* Show Slots Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Added Slots</h3>
          {slots.length === 0 ? (
            <p className="text-gray-600">No slots added yet.</p>
          ) : (
            <ul className="space-y-3">
              {slots.map((slot, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-white rounded-md shadow">
                  <span className="text-lg">{slot.toLocaleString()}</span>
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

        {/* Price Input (Using a Slider) */}
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
          <button className="w-full py-4 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600">
            Save Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;

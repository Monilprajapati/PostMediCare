import React, { useState } from "react";
import { useParams } from "react-router-dom";

const doctorData = [
  // Dummy data for demonstration; replace this with data fetched from an API
  {
    id: 1,
    name: "Dr. John Doe",
    clinic: "Downtown Clinic",
    photo: "https://via.placeholder.com/150",
    skills: "Endocrinology, Internal Medicine",
    appointmentDescription:
      "A detailed consultation to discuss diabetes management strategies. This includes personalized advice and lifestyle recommendations.",
    slots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
    price: 50,
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    clinic: "Doctor notWestside Clinic",
    photo: "https://via.placeholder.com/150",
    skills: "Nutrition, Preventive Medicine",
    appointmentDescription:
      "A comprehensive appointment focusing on diabetes-friendly diets and preventive care measures.",
    slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    price: 60,
  },
  {
    id: 3,
    name: "Dr. Michael Johnson",
    clinic: "Eastside Clinic",
    photo: "https://via.placeholder.com/150",
    skills: "Cardiology, Internal Medicine",
    appointmentDescription:
      "A detailed consultation to discuss heart health and personalized care plans.",
    slots: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"],
    price: 70,
  },
  {
    id: 4,
    name: "Dr. Sarah Brown",
    clinic: "Northside Clinic",
    photo: "https://via.placeholder.com/150",
    skills: "Dermatology, Aesthetics",
    appointmentDescription:
      "A consultation to discuss skin health, aesthetics, and personalized care plans.",
    slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
    price: 80,
  }
  // Add more doctor data as needed
];

const DoctorAppointment = () => {
  const { doctorId } = useParams();
  const doctor = doctorData[doctorId];

  const [selectedSlot, setSelectedSlot] = useState("");
  const [amountPaid, setAmountPaid] = useState(0);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handleSlotChange = (event) => {
    setSelectedSlot(event.target.value);
  };


  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const handlePaymentClick = () => {
    if (!selectedSlot) {
      alert("Please select a slot before proceeding.");
      return;
    }

    // Logic for handling payment
    alert(`Proceeding to payment of $${doctor.price} for slot ${selectedSlot}`);
    // You can integrate your payment gateway here
  };
  const handleAmountChange = (event) => {
    setAmountPaid(event.target.value);
  };

  return (
    <div className="w-full h-screen p-8 bg-gray-100 flex flex-col">
      <div className="flex items-center mb-8">
        <img
          src={doctor.photo}
          alt={doctor.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
        />
        <div className="ml-6 flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
          <p className="text-gray-600">{doctor.clinic}</p>
          <p className="text-gray-600 mt-2">{doctor.skills}</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-lg my-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Appointment Details
        </h2>
        <p className="text-gray-600 mb-4">{doctor.appointmentDescription}</p>
        <div className="mb-4">
          <label htmlFor="slots" className="block text-gray-700 mb-2">
            Select Slot:
          </label>
          <select
            id="slots"
            value={selectedSlot}
            onChange={handleSlotChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="" disabled>
              Select a slot
            </option>
            {doctor.slots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <p className="text-gray-700">Price: ${doctor.price}</p>
        </div>
        <button
          onClick={handlePaymentClick}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default DoctorAppointment;

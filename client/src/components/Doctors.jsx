import React from 'react';
import { useNavigate } from 'react-router-dom';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. John Doe',
    hospital: 'City Hospital',
    clinic: 'Downtown Clinic',
    photo: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    hospital: 'Health Center',
    clinic: 'Westside Clinic',
    photo: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Dr. Michael Johnson',
    hospital: 'General Hospital',
    clinic: 'Eastside Clinic',
    photo: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Dr. Sarah Brown',
    hospital: 'Community Hospital',
    clinic: 'Northside Clinic',
    photo: 'https://via.placeholder.com/150'
  }
  // Add more doctor data as needed
];

const Doctors = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/patient-dashboard/doctors/${id}`);
  };

  return (
    <div className="w-full h-screen p-8 bg-gray-100 px-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Doctors accross the plateform</h1>
      <div className="w-full h-full flex flex-col gap-6 overflow-y-auto">
        {doctorsData.map((doctor) => (
          <div
            key={doctor.id}
            className="w-full bg-white shadow-lg rounded-lg flex items-center cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => handleCardClick(doctor.id)}
          >
            <img
              src={doctor.photo}
              alt={doctor.name}
              className="w-32 h-32 object-cover rounded-l-lg"
            />
            <div className="p-6 flex flex-col justify-center w-full">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.hospital}</p>
              <p className="text-gray-600">{doctor.clinic}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;

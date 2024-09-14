export default function DoctorsProfile() {
  return (
    <div className="flex items-center p-6">
      <img
        className="h-24 w-24 rounded-full object-cover"
        src="https://via.placeholder.com/100" // Replace with the actual doctor's image URL
        alt="Doctor"
      />
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-gray-900">Dr. John Doe</h2>
        <p className="text-gray-600">
          Specialist in Diabetes Health Management
        </p>
      </div>
    </div>
  );
}

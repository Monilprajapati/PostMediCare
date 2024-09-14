export default function DoctorsResource() {
  return (
    <div className="w-full flex justify-center items-start p-8 h-screen bg-gray-100">
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {/* Resource 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-gray-800">
            Managing Blood Sugar Levels
          </h4>
          <p className="text-gray-600 mt-2">
            Learn the key strategies for managing blood sugar levels effectively
            and preventing complications.
          </p>
          <a
            href="https://example.com/resource1"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read More
          </a>
        </div>

        {/* Resource 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-gray-800">
            Diabetes-Friendly Diets
          </h4>
          <p className="text-gray-600 mt-2">
            A guide to creating diabetes-friendly meal plans to keep your blood
            sugar in check.
          </p>
          <a
            href="https://example.com/resource2"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read More
          </a>
        </div>

        {/* Resource 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-gray-800">
            Exercise and Diabetes
          </h4>
          <p className="text-gray-600 mt-2">
            Explore the benefits of regular exercise in managing diabetes and
            improving overall health.
          </p>
          <a
            href="https://example.com/resource3"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read More
          </a>
        </div>

        {/* Resource 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-gray-800">
            Medication Management
          </h4>
          <p className="text-gray-600 mt-2">
            Understand the different types of medications used in diabetes
            treatment and how to manage them effectively.
          </p>
          <a
            href="https://example.com/resource4"
            className="text-blue-500 hover:underline mt-4 block"
          >
            Read More
          </a>
        </div>

        {/* Add More Resource Cards as needed */}
      </div>
    </div>
  );
}

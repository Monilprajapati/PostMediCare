import { useState, useEffect } from "react";

const MyResources = () => {
  const [resources, setResources] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    // Fetch resources from local storage when component mounts
    const storedResources = JSON.parse(localStorage.getItem('resources')) || [];

    // If no stored resources, use dummy data
    if (storedResources.length === 0) {
      const dummyData = [
        {
          title: "Understanding Diabetes",
          description: "A comprehensive guide to diabetes types, symptoms, and management.",
          link: "https://www.diabetes.org/diabetes"
        },
        {
          title: "Healthy Eating for Diabetics",
          description: "Tips and recipes for maintaining a balanced diet with diabetes.",
          link: "https://www.healthline.com/health/diabetes/diet-nutrition"
        },
        {
          title: "Exercise and Diabetes",
          description: "How physical activity can help manage blood sugar levels and improve overall health.",
          link: "https://www.mayoclinic.org/diseases-conditions/diabetes/in-depth/diabetes-and-exercise/art-20045697"
        }
      ];
      setResources(dummyData);
      updateLocalStorage(dummyData);
    } else {
      setResources(storedResources);
    }
  }, []);

  // Function to update local storage
  const updateLocalStorage = (updatedResources) => {
    localStorage.setItem('resources', JSON.stringify(updatedResources));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new resource to the resources array
    const newResource = {
      title,
      description,
      link,
    };
    const updatedResources = [...resources, newResource];
    setResources(updatedResources);

    // Update local storage
    updateLocalStorage(updatedResources);

    // Clear input fields
    setTitle("");
    setDescription("");
    setLink("");
  };

  const deleteResource = (index) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
    // Update local storage
    updateLocalStorage(updatedResources);
  };

  return (
    <div className="w-full min-h-screen p-8">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Add a Resource
      </h2>

      {/* Form to add a new resource */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex-1 md:mr-4 mb-4 md:mb-0">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the resource title"
              required
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="link"
              className="block text-gray-700 font-medium mb-2"
            >
              Blog Link
            </label>
            <input
              type="url"
              id="link"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              placeholder="Enter the blog link"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-300 rounded-lg"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the resource description"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full md:w-auto hover:bg-blue-700"
        >
          Add Resource
        </button>
      </form>

      {/* List of resources */}
      <h3 className="text-2xl font-semibold mb-6 px-10">Your Resources</h3>
      {resources.length > 0 ? (
        <ul className="space-y-6 px-10">
          {resources.map((resource, index) => (
            <li
              key={index}
              className="w-full bg-white shadow-md p-6 rounded-lg"
            >
              <h4 className="text-xl font-semibold text-gray-800">
                {resource.title}
              </h4>
              <p className="text-gray-600 mb-2">{resource.description}</p>
              <div className="flex items-center gap-4">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline px-3 bg-gray-100 py-2"
                >
                  Visit Blog
                </a>
                <button
                  onClick={() => deleteResource(index)}
                  className=" text-red-500 hover:underline px-3 bg-gray-100 py-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No resources added yet.</p>
      )}
    </div>
  );
};

export default MyResources;

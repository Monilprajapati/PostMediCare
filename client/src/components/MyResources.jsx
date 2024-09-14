import React, { useState } from "react";

const MyResources = () => {
  const [resources, setResources] = useState([
    {
      title: "Managing Blood Sugar Levels",
      description:
        "Learn about key strategies to effectively manage blood sugar levels, prevent complications, and maintain a healthy lifestyle with diabetes.",
      link: "https://example.com/managing-blood-sugar-levels",
    },
    {
      title: "Diabetes-Friendly Diet Plans",
      description:
        "A comprehensive guide to creating diabetes-friendly meal plans to help you control your blood sugar while enjoying your food.",
      link: "https://example.com/diabetes-friendly-diets",
    },
    {
      title: "Exercise and Diabetes: The Perfect Combination",
      description:
        "Discover how regular exercise can significantly improve blood sugar control, reduce insulin resistance, and promote overall well-being.",
      link: "https://example.com/exercise-and-diabetes",
    },
    {
      title: "Understanding Medication for Diabetes",
      description:
        "Get an overview of the medications used to treat diabetes, how they work, and tips for managing your treatment effectively.",
      link: "https://example.com/diabetes-medications",
    },
    {
      title: "Managing Stress with Diabetes",
      description:
        "Learn how managing stress can help improve diabetes control and contribute to better mental and physical health.",
      link: "https://example.com/managing-stress-with-diabetes",
    },
  ]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new resource to the resources array
    const newResource = {
      title,
      description,
      link,
    };
    setResources([...resources, newResource]);

    // Clear input fields
    setTitle("");
    setDescription("");
    setLink("");
  };

  const deleteResource = (index) => {
    const updatedResources = resources.filter((_, i) => i !== index);
    setResources(updatedResources);
  };

  return (
    <div className="w-full min-h-screen p-8 bg-gray-100">
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

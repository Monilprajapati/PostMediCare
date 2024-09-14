import React from "react";
import Navbar from "./Navbar";

const Resources = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Resources for Managing Diabetes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our curated resources, including blogs, articles, and
              videos, to help you better manage diabetes and live a healthier
              life.
            </p>
          </div>

          {/* Blogs Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blogs</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Blog 1 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://example.com/blog-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Understanding Type 1 and Type 2 Diabetes
                  </a>
                </h3>
                <p className="mt-4 text-gray-600">
                  Discover the key differences between Type 1 and Type 2
                  diabetes and how each can be managed effectively.
                </p>
                <a
                  href="https://example.com/blog-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:underline"
                >
                  Read more →
                </a>
              </div>

              {/* Blog 2 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://example.com/blog-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Best Practices for Monitoring Blood Sugar Levels
                  </a>
                </h3>
                <p className="mt-4 text-gray-600">
                  A comprehensive guide on how to effectively monitor and
                  control your blood sugar levels daily.
                </p>
                <a
                  href="https://example.com/blog-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:underline"
                >
                  Read more →
                </a>
              </div>

              {/* Blog 3 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://example.com/blog-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How Diet Affects Diabetes
                  </a>
                </h3>
                <p className="mt-4 text-gray-600">
                  Learn about the types of foods that can help manage your
                  diabetes and the importance of a balanced diet.
                </p>
                <a
                  href="https://example.com/blog-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              YouTube Videos
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Video 1 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://www.youtube.com/embed/_wcZJbmqXmk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    How to Monitor Blood Sugar Levels at Home
                  </a>
                </h3>
                <iframe
                  className="w-full h-64 mt-4 rounded-lg"
                  src="https://www.youtube.com/embed/_wcZJbmqXmk"
                  title="YouTube Video 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 2 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://www.youtube.com/embed/eOF9Z0lkNcI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Exercise Routines for Diabetes Patients
                  </a>
                </h3>
                <iframe
                  className="w-full h-64 mt-4 rounded-lg"
                  src="https://www.youtube.com/embed/eOF9Z0lkNcI"
                  title="YouTube Video 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video 3 */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-600">
                  <a
                    href="https://www.youtube.com/embed/x56fO9qMP2g"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Understanding Carbs and Diabetes
                  </a>
                </h3>
                <iframe
                  className="w-full h-64 mt-4 rounded-lg"
                  src="https://www.youtube.com/embed/x56fO9qMP2g"
                  title="YouTube Video 3"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Other Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Additional Resources
            </h2>
            <ul className="space-y-4 text-lg text-indigo-600">
              <li>
                <a
                  href="https://www.diabetes.org/diabetes-resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Diabetes Association: Resources for Diabetes Care
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/diabetes/managing/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CDC: Managing Diabetes Guide
                </a>
              </li>
              <li>
                <a
                  href="https://www.healthline.com/health/diabetes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Healthline: Diabetes Care and Management
                </a>
              </li>
              <li>
                <a
                  href="https://www.webmd.com/diabetes/default.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WebMD: Diabetes Overview and Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;

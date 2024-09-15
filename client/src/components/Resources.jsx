import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation, Link } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";
import { FaHouseChimneyMedical } from "react-icons/fa6";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";

const Resources = () => {
  const navigation = [
    { name: "Contact Us", href: "/contactus" },
    { name: "Resources", href: "/resources" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuth } = useUserContext();

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 mb-10">
        <nav
          aria-label="Global"
          className={`${
            isAuth ? "hidden" : "flex"
          } items-center justify-between p-6 lg:px-8`}
        >
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">PostMediCare</span>
              <div className="flex items-center gap-2">
                <FaHouseChimneyMedical className="h-8 w-auto" />
                <span className="text-xl mt-1 font-medium">PostMediCare</span>
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {!user && (
              <Link
                to={"/login"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            )}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to={"/"} className="-m-1.5 p-1.5">
                <span className="sr-only">PostMediCare</span>
                <div className="flex items-center gap-2">
                  <FaHouseChimneyMedical className="h-8 w-auto" />
                  <span className="text-xl mt-1 font-medium">PostMediCare</span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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

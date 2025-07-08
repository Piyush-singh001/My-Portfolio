import React from "react";
import { FiLayout, FiCode, FiEdit3 } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

function Services() {
  const services = [
    {
      icon: <FiLayout size={28} />,
      title1: "Web",
      title2: "Developer",
    },
    {
      icon: <FiCode size={28} />,
      title1: "UI/UX",
      title2: "Designer",
    },
    {
      icon: <FiEdit3 size={28} />,
      title1: "Branding",
      title2: "Designer",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white px-4 flex flex-col items-center text-center pt-32"
    >
      <h2 className="text-4xl font-bold text-gray-800">Services</h2>
      <p className="text-gray-500 mt-2 mb-12">What I offer</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white h-[400px] rounded-xl border shadow-sm p-6 flex flex-col items-start px-20 py-28 hover:shadow-md transition"
          >
            <div className="text-gray-800  mb-4">{service.icon}</div>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title1}
            </h3>
            <h3 className="text-lg font-medium text-gray-900">
              {service.title2}
            </h3>
            <button className="mt-4 text-sm text-gray-500 hover:text-black flex items-center gap-1 transition">
              View More <BsArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

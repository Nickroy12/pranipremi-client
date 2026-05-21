"use client";

import React from "react";
import {
  FaPaw,
  FaHeartbeat,
  FaSearchLocation,
  FaHandsHelping,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Pet Adoption",
    description:
      "Find loving pets and give them a safe, happy, and caring home.",
    icon: <FaPaw size={28} />,
  },
  {
    id: 2,
    title: "Health Tracking",
    description:
      "Keep track of pet vaccinations, medical history, and wellness updates.",
    icon: <FaHeartbeat size={28} />,
  },
  {
    id: 3,
    title: "Location Based Search",
    description:
      "Discover pets available for adoption near your location easily.",
    icon: <FaSearchLocation size={28} />,
  },
  {
    id: 4,
    title: "Rescue & Support",
    description:
      "Support rescued animals and connect with compassionate pet lovers.",
    icon: <FaHandsHelping size={28} />,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Prani Premi?
          </h2>

          <p className="max-w-2xl mx-auto text-gray-500 text-lg">
            Prani Premi helps animal lovers connect, adopt, rescue, and care
            for pets through a modern and easy-to-use platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-base-200 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
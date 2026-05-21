'use client'

import { authClient } from "@/lib/auth-client";
import { useRef, useState } from "react";

const PetForm = ({ postPet }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
    const { data: session, isPending } = authClient.useSession()
  
    const user = session?.user
    console.log(user , "user");

  const handleSubmit = async (formData) => {
    try {
      setLoading(true);

      await postPet(formData);

      // reset form
      formRef.current?.reset();

      // close DaisyUI modal
      const modal = document.getElementById("my_modal_7");
      if (modal) modal.checked = false;

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 p-6 transition-colors duration-300">
      <div className="w-full max-w-5xl bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Add Pet Information
        </h2>

        {/* Form */}
        <form
          ref={formRef}
          action={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Pet Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Pet Name
            </label>
            <input
              name="petName"
              type="text"
              required
              placeholder="Enter pet name"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Species */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Species
            </label>
            <select
              name="species"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Fish">Fish</option>
              <option value="Cow">Cow</option>
            </select>
          </div>

          {/* Breed */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Breed
            </label>
            <input
              name="breed"
              type="text"
              required
              placeholder="Golden Retriever"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Age
            </label>
            <input
              name="age"
              type="number"
              required
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
              placeholder="2"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Gender
            </label>
            <select
              name="gender"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Vaccination Status */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Vaccination Status
            </label>
            <select
              name="vaccinationStatus"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Status</option>
              <option value="Vaccinated">Vaccinated</option>
              <option value="Not Vaccinated">Not Vaccinated</option>
              <option value="Not Need">Not Need</option>
            </select>
          </div>

          {/* Health Status */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Health Status
            </label>
            <select
              name="healthStatus"
              required
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Health Status</option>
              <option value="Healthy">Healthy</option>
              <option value="Sick">Sick</option>
              <option value="Under Treatment">Under Treatment</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Image URL
            </label>
            <input
              name="imageUrl"
              type="text"
              required
              placeholder="https://example.com/pet.jpg"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Location
            </label>
            <input
              name="location"
              type="text"
              required
              placeholder="Dhaka"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Adoption Fee */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Adoption Fee
            </label>
            <input
              name="adoptionFee"
              type="number"
              required
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
              placeholder="500"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Owner Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Owner Email
            </label>
            <input
              name="ownerEmail"
              type="email"
              required
              placeholder="owner@gmail.com"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
                  defaultValue={user?.email || ""}
        readOnly
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              required
              placeholder="Write pet details..."
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-amber-400 font-medium text-white hover:bg-amber-500 transition disabled:opacity-70"
            >
              {loading ? "Adding..." : "Add Pet"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PetForm;
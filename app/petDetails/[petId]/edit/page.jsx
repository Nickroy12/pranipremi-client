import { petUpdate } from "@/lib/action";
import { petDetails } from "@/lib/data";
import React from "react";

const EditPet = async ({ params }) => {
  const { petId } = await params;
  const pet = await petDetails(petId);

  const updatePetInfo = async(formData) =>{
    'use server'
    return petUpdate(petId , formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
        
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Edit Pet Information : {pet?.petName}
        </h2>

        <form action={updatePetInfo} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pet Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Pet Name
            </label>

            <input
              name="petName"
              type="text"
              required
              defaultValue={pet?.petName}
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
              defaultValue={pet?.species}
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
              defaultValue={pet?.breed}
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
              defaultValue={pet?.age}
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
              defaultValue={pet?.gender}
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
              defaultValue={pet?.vaccinationStatus}
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Status</option>
              <option value="Vaccinated">Vaccinated</option>
              <option value="Not Vaccinated">Not Vaccinated</option>
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
              defaultValue={pet?.healthStatus}
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
              defaultValue={pet?.imageUrl}
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
              defaultValue={pet?.location}
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
              defaultValue={pet?.adoptionFee}
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
              defaultValue={pet?.ownerEmail}
              placeholder="owner@gmail.com"
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
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
              defaultValue={pet?.description}
              placeholder="Write pet details..."
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-amber-400 text-white font-semibold hover:bg-amber-500 transition"
            >
              Update Pet
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EditPet;
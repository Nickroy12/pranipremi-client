'use client'

const PetForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add Pet Information
        </h2>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Pet Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Pet Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter pet name"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Species */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Species
            </label>
            <select
              required
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Species</option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Bird">Bird</option>
              <option value="Rabbit">Rabbit</option>
              <option value="Fish">Fish</option>
            </select>
          </div>

          {/* Breed */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Breed
            </label>
            <input
              type="text"
              required
              placeholder="Golden Retriever"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Age
            </label>
            <input
              type="number"
              required
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
              placeholder="2"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Gender
            </label>
            <select
              required
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Vaccination */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Vaccination Status
            </label>
            <select
              required
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="">Select Status</option>
              <option>Vaccinated</option>
              <option>Not Vaccinated</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              required
              placeholder="https://example.com/pet.jpg"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              required
              placeholder="Dhaka"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Adoption Fee */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Adoption Fee
            </label>
            <input
              type="number"
              required
              min="0"
              onKeyDown={(e) => {
                if (e.key === "-" || e.key === "e") e.preventDefault();
              }}
              placeholder="500"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Owner Email */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Owner Email
            </label>
            <input
              type="email"
              required
              placeholder="owner@gmail.com"
              className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-2 text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              required
              placeholder="Write pet details..."
              className="border border-gray-300 rounded-xl px-4 py-3 min-h-[140px] outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-2">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-400 font-medium text-white hover:bg-amber-500 transition"
            >
              Add Pet
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PetForm;
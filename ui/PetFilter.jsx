"use client";

import { useEffect, useState } from "react";
import ForntCard from "@/ui/ForntCard";

const PetFilter = ({ pets = [] }) => {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("all");
  const [filteredPets, setFilteredPets] = useState(pets);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch from backend (MongoDB filtering)
  const fetchPets = async (searchValue = "", speciesValue = "all") => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      if (searchValue) params.append("name", searchValue);
      if (speciesValue !== "all") params.append("species", speciesValue);

      const res = await fetch(
        `http://localhost:8000/pets?${params.toString()}`
      );

      const data = await res.json();

      setFilteredPets(data);
    } catch (error) {
      console.log("Error fetching pets:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔄 Load all pets initially
  useEffect(() => {
    fetchPets();
  }, []);

  // 🔍 Search button
  const handleSearch = () => {
    fetchPets(search, species);
  };

  // 🐾 Filter change
  const handleCategoryChange = (value) => {
    setSpecies(value);
    fetchPets(search, value);
  };

  return (
    <div className="w-11/12 mx-auto py-6">

      {/* 🔍 Search + Filter */}
      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">

        {/* Species Filter */}
        <select
          className="select select-bordered w-full md:w-52"
          value={species}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="all">All Species</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Cow">Cow</option>
        </select>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search pet name..."
          className="input input-bordered"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="btn bg-amber-500 font-light md:w-auto"
        >
          Search
        </button>
      </div>

      {/* 🔄 Loading */}
      {loading && (
        <p className="text-center text-gray-500 mb-4">
          Loading pets... 🐾
        </p>
      )}

      {/* 🐶 Pet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <ForntCard key={pet._id} pet={pet} />
          ))
        ) : (
          !loading && (
            <p className="text-center col-span-full text-gray-500">
              No pets found 🐾
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default PetFilter;
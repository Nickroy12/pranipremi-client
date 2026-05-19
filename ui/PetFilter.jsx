"use client";

import { useState } from "react";
import ForntCard from "@/ui/ForntCard";

const PetFilter = ({ pets = [] }) => {
  const [search, setSearch] = useState("");
  const [species, setSpecies] = useState("all");
  const [filteredPets, setFilteredPets] = useState(pets);

  const handleSearch = () => {
    let result = pets;

    if (species !== "all") {
      result = result.filter(
        (pet) =>
          pet.species?.toLowerCase() ===
          species.toLowerCase()
      );
    }

    result = result.filter((pet) =>
      pet.petName
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    setFilteredPets(result);
  };

  const handleCategoryChange = (value) => {
    setSpecies(value);

    let result = pets;

    if (value !== "all") {
      result = result.filter(
        (pet) =>
          pet.species?.toLowerCase() ===
          value.toLowerCase()
      );
    }

    setFilteredPets(result);
  };

  return (
    <div className="w-11/12 mx-auto py-6">
      <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
        <select
          className="select select-bordered w-full md:w-52"
          value={species}
          onChange={(e) =>
            handleCategoryChange(e.target.value)
          }
        >
          <option value="all">All Species</option>
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Bird">Bird</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Cow">Cow</option>
        </select>

        <input
          type="text"
          placeholder="Search pet name..."
          className="input input-bordered "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="btn bg-amber-500  font-light md:w-auto"
        >
         Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <ForntCard
              key={pet._id}
              pet={pet}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No pets found 🐾
          </p>
        )}
      </div>
    </div>
  );
};

export default PetFilter;
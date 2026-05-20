import { getPets } from "@/lib/data";
import ForntCard from "@/ui/ForntCard";
import Link from "next/link";
import React from "react";

const Pets = async () => {
  const petsData = (await getPets()) || [];

  return (
    <div className="w-10/12 mx-auto p-5 space-y-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">
        Available Pets
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {petsData.slice(0, 6).map((pet) => (
          <ForntCard key={pet._id} pet={pet} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <Link
          href="/pets"
          className="btn btn-outline rounded-4xl btn-lg border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-black transition"
        >
          All Pets
        </Link>
      </div>
    </div>
  );
};

export default Pets;
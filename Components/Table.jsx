import { deletePet, handleAction } from "@/lib/action";
import PostCard from "@/ui/PostCard";
import React from "react";

const Table = ({ pets, user }) => {

  const petDelete = async (petId) => {
    await deletePet(petId);
  };

  const request = async (requestId, status) => {
      await handleAction(requestId, status);
  };

  const myPets = pets.filter(
    (pet) => pet.ownerEmail === user?.email
  );

  return (
    <div className="w-11/12 mx-auto">

      {myPets.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {myPets.map((pet) => (
            <PostCard
              key={pet._id}
              pet={pet}
              petDelete={petDelete}
              request={request}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <div className="shadow-lg rounded-xl p-8 text-center bg-base-100 w-full">
            <h2 className="text-xl font-semibold mb-2">
              No Posts Found
            </h2>
            <p className="text-gray-500 mb-4">
              You haven’t created any pet posts yet.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
export default Table;
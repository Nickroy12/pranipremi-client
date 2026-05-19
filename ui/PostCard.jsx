'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { GiDogHouse } from "react-icons/gi";
import DeleteConfirm from "./DeleteConfirm";

const PostCard = ({ pet , petDelete }) => {
   
  return (
    <div className="card bg-base-100 w-full shadow-md rounded-xl overflow-hidden">
      
      <figure className="w-full h-56 relative">
        <Image
          src={pet.imageUrl}
          fill
          className="object-cover"
          alt={pet.petName}
        />
      </figure>

      <div className="card-body">

        <div className="flex justify-between items-start">
          
          <div>
            <h2 className="card-title">
              {pet.petName}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">
              Adoption Fee
            </p>

            <h2 className="font-bold text-amber-500">
              ৳ {pet.adoptionFee}
            </h2>
          </div>

        </div>

        <div className="divider my-1"></div>

        <div className="card-actions justify-end flex-wrap gap-2">

          <Link href={`/petDetails/${pet._id}`}  className="btn btn-sm btn-outline border-amber-400">
            <FaEye />
            View
          </Link>
          <Link href={`/petDetails/${pet._id}/edit`}  className="btn btn-sm btn-outline border-amber-400">
       <FaEdit />
            Edit
          </Link>



          <button className="btn btn-sm btn-outline border-amber-400">
            <GiDogHouse />
            Request
          </button>

         <DeleteConfirm pet={pet} petDelete={() => petDelete(pet._id)} />

        </div>
      </div>
    </div>
  );
};

export default PostCard;
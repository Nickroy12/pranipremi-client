'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaEye, FaEdit } from "react-icons/fa";


import DeleteConfirm from "./DeleteConfirm";
import Request from "./Request";

const PostCard = ({ pet, petDelete , request }) => {
   console.log(pet , "Pat");
   
  const imageSrc =
    pet?.imageUrl && pet.imageUrl.trim() !== ""
      ? pet.imageUrl
      : "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=";

  return (
    <div className="card bg-base-100 w-full shadow-md rounded-xl overflow-hidden">

      {/* IMAGE */}
      <figure className="w-full h-56 relative">
        <Image
          src={imageSrc}
          alt={pet?.petName || "Pet Image"}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>

      {/* BODY */}
      <div className="card-body">

        {/* TITLE + PRICE */}
        <div className="flex justify-between items-start">

          <div>
            <h2 className="card-title">
              {pet?.petName}
            </h2>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">
              Adoption Fee
            </p>

            <h2 className="font-bold text-amber-500">
              ৳ {pet?.adoptionFee}
            </h2>
          </div>

        </div>

        <div className="divider my-1"></div>

        {/* ACTION BUTTONS */}
        <div className="card-actions justify-end flex-wrap gap-2">

          <Link
            href={`/petDetails/${pet?._id}`}
            className="btn btn-sm btn-outline border-amber-400"
          >
            <FaEye />
            View
          </Link>

          <Link
            href={`/petDetails/${pet?._id}/edit`}
            className="btn btn-sm btn-outline border-amber-400"
          >
            <FaEdit />
            Edit
          </Link>

         

          <DeleteConfirm
            pet={pet}
            petDelete={() => petDelete(pet?._id)}
          />

        </div>

      </div>
    </div>
  );
};

export default PostCard;
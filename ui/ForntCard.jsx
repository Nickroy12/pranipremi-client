import Image from 'next/image'
import React from 'react'

const ForntCard = ({ pet }) => {
  return (
    <div className="card bg-base-100 shadow-sm dark:border-2 dark:border-amber-300
      hover:-translate-y-2 hover:scale-[1.03] hover:shadow-xl
      transition-all duration-300">

      {/* IMAGE */}
      <figure className="relative h-64 w-full overflow-hidden rounded-t-xl group">
        <Image
          src={pet.imageUrl}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          alt={pet.petName}
        />
      </figure>

      {/* BODY */}
      <div className="card-body">

        {/* TITLE + BADGE */}
        <div className="flex justify-between items-center">
          <h2 className="card-title">{pet.petName}</h2>

          <div className="badge text-black bg-amber-200">
            {pet.species}
          </div>
        </div>

        {/* DETAILS */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
          <p>{pet.breed}</p>
          <span>•</span>
          <p>{pet.age} Years</p>
          <span>•</span>
          <p>{pet.gender}</p>
        </div>

        {/* ACTION AREA */}
        <div className="card-actions justify-end mt-3">
          {/* future buttons like View / Adopt */}
        </div>

      </div>
    </div>
  )
}

export default ForntCard
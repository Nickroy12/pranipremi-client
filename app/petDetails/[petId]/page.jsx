import { petDetails } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const PetDetails = async ({ params }) => {
  const { petId } = await params

  const pet = await petDetails(petId)

  if (!pet) {
    return (
      <div>
        <h1>Pet not found 😢</h1>
      </div>
    )
  }

  return (
<div className='w-10/12 mx-auto flex  justify-center'>
  <div className=' md:w-7/12  space-y-3'>
    <Image
      src={pet.imageUrl}
      alt={pet.petName}
      width={700}
      height={200}
      className='object-cover rounded-lg'
    />
    <div className='flex justify-between'>
        <div className='space-y-3'>
            <h1 className='text-5xl  dark:text-white text-black font-bold'>{pet.petName}</h1>
            <div className="flex gap-4">
             <p>{pet.description}</p>
            </div>
        </div>
       <div>
        <p className='font-semibold'>Adoption Fees</p>
        <h1 className='md:text-2xl  text-amber-500 font-bold'>{pet.adoptionFee}</h1>
       </div>
    </div>
    <div className='grid grid-cols-2 gap-3'>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Species</p>
        <p className='font-semibold'>{pet.species}</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Breed</p>
        <p className='font-semibold'>{pet.breed}</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Age</p>
        <p className='font-semibold'>{pet.age} Years</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Gender</p>
        <p className='font-semibold'>{pet.gender}</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Location</p>
        <p className='font-semibold'>{pet.location}</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Adoption Fees</p>
        <p className='font-semibold'>{pet.adoptionFee}</p>
        </div>
        <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Health</p>
        <p className='font-semibold'>{pet.healthStatus}</p>
        </div>
             <div className="dark:bg-gray-300/10 bg-slate-400/10 shadow shadow-slate-300/15 rounded-2xl p-3 ">
        <p className='font-light'>Vaccine</p>
        <p className='font-semibold'>{pet.vaccinationStatus}</p>
        </div>
    </div>
  </div>
</div>
  )
}

export default PetDetails
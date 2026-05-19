import { deletePet } from '@/lib/action'
import PostCard from '@/ui/PostCard'
import React from 'react'

const Table = ({pets}) => {
 const petDelete = async (petId) => {
    'use server'
    await deletePet(petId)
  }
  return (
    <div className='w-11/12 mx-auto'>
      <grid className="grid md:grid-cols-3 gap-4">
           {
            pets.map(pet =>{
                return <PostCard key={pet._id}  petDelete={petDelete} pet={pet}/>
            })
        }
      </grid>
    </div>
  )
}

export default Table
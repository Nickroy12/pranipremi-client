import { getPets } from '@/lib/data'
import ForntCard from '@/ui/ForntCard'
import React from 'react'

const Pets = async () => {
  const petsData = await getPets()

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {petsData.map((pet) => (
          <ForntCard key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  )
}

export default Pets
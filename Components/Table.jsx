import PostCard from '@/ui/PostCard'
import React from 'react'

const Table = ({pets}) => {
  return (
    <div className='w-11/12 mx-auto'>
      <grid className="grid md:grid-cols-3 gap-4">
           {
            pets.map(pet =>{
                return <PostCard key={pet._id} pet={pet}/>
            })
        }
      </grid>
    </div>
  )
}

export default Table
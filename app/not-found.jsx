
import Link from 'next/link'
import React from 'react'
import { MdPets } from 'react-icons/md'


const NotFound = () => {
  return (
    <div className='h-[80vh] w-10/12 mx-auto rounded-4xl flex justify-center items-center shadow flex-col  space-y-4'>
        <MdPets className='text-5xl'/>
     <h1 className='text-3xl text-amber-300 font-light'>404 NOT FOUND</h1>
        <Link href={'/'}>
         <button className="btn bg-gray-500 text-white">Back</button>
        </Link>

    </div>
  )
}

export default NotFound
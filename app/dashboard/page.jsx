import Table from '@/Components/Table'
import { getPets } from '@/lib/data'
import From from '@/ui/FormModal'
import OwnerBoard from '@/ui/OwnerBoard'
import React from 'react'

const Dashboard = async() => {
    const pets = await getPets()
  return (
  <div className='w-10/12 mx-auto space-y-3'>
  <div className=' flex justify-between'>
        <div></div>
       <div>
        <From/>
       </div>
     
    </div>
    <OwnerBoard/>
   <Table pets={pets} />
  </div>
  )
}

export default Dashboard
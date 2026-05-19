import React from 'react'

const OwnerBoard = () => {
  return (
    <div className='w-11/12 mx-auto py-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className='bg-white shadow-lg dark:bg-slate-900 rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>Total Sell</h3>
          <p className='text-3xl font-bold mt-2'>120</p>
        </div>

        <div className='bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>Total Pets</h3>
          <p className='text-3xl font-bold mt-2'>45</p>
        </div>

        <div className='bg-white shadow-lg dark:bg-slate-900 rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>Pending Requests</h3>
          <p className='text-3xl font-bold mt-2'>18</p>
        </div>

      </div>
    </div>
  )
}

export default OwnerBoard
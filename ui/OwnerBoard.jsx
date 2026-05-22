'use client'

import { authClient } from '@/lib/auth-client'
import { adoptPet } from '@/lib/data'
import React, { useEffect, useState } from 'react'

const OwnerBoard = () => {

  const { data: session } = authClient.useSession()

  const userEmail = session?.user?.email

  const [requests, setRequests] = useState([])

  // fetch data
  useEffect(() => {

    const fetchData = async () => {
      const data = await adoptPet()

      const allRequests = data?.requests || []

      // only current user data
      const myRequests = allRequests.filter(
        item => item.userEmail === userEmail
      )

      setRequests(myRequests)
    }

    if (userEmail) {
      fetchData()
    }

  }, [userEmail])

  // counts
  const totalSell = requests.length

  const pendingRequests = requests.filter(
    item => item.status === 'pending'
  ).length

  const acceptedRequests = requests.filter(
    item => item.status === 'approved'
  ).length

  return (
    <div className='w-11/12 mx-auto py-10'>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* My Requests */}
        <div className='bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>
            My Requests
          </h3>

          <p className='text-3xl font-bold mt-2'>
            {totalSell}
          </p>
        </div>

        {/* Pending */}
        <div className='bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>
            Pending Requests
          </h3>

          <p className='text-3xl font-bold mt-2'>
            {pendingRequests}
          </p>
        </div>

        {/* Accepted */}
        <div className='bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-6 border'>
          <h3 className='text-gray-500 text-sm'>
            Accepted Requests
          </h3>

          <p className='text-3xl font-bold mt-2'>
            {acceptedRequests}
          </p>
        </div>

      </div>
    </div>
  )
}

export default OwnerBoard
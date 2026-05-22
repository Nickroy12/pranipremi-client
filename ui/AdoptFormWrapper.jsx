'use client'

import { authClient } from '@/lib/auth-client'
import AdoptForm from './AdoptForm'
import { IoWarningOutline } from 'react-icons/io5'
import { FaPaw } from 'react-icons/fa'
import { MdPets } from 'react-icons/md'

const AdoptFormWrapper = ({ pet, AdoptPet }) => {
  const { data: session, isPending } = authClient.useSession()

  const user = session?.user

  // loading state
  if (isPending) {
    return (
      <div className="w-full rounded-2xl border border-base-300 bg-base-100 shadow-md p-8 flex flex-col items-center justify-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>

        <div className="text-center">
          <h2 className="text-xl font-bold">Loading Session</h2>
          <p className="text-base-content/70">
            Please wait while we verify your account.
          </p>
        </div>
      </div>
    )
  }

  // not logged in
  if (!user) {
    return (
      <div className="w-full rounded-2xl border border-info/30 bg-info/10 shadow-md p-8 flex flex-col items-center text-center gap-4">
        <MdPets className="text-5xl text-info" />

        <div>
          <h2 className="text-2xl font-bold text-info">
            Login Required
          </h2>

          <p className="text-base-content/70 mt-2">
            Please login first to send an adoption request for this pet.
          </p>
        </div>

        <button className="btn btn-info text-white mt-2">
          Login Now
        </button>
      </div>
    )
  }

  // request pending fallback
  if (!AdoptPet) {
    return (
      <div className="w-full rounded-2xl border border-warning/30 bg-warning/10 shadow-md p-8 flex flex-col items-center text-center gap-4">
        <IoWarningOutline className="text-5xl text-warning" />

        <div>
          <h2 className="text-2xl font-bold text-warning">
            Request Pending
          </h2>

          <p className="text-base-content/70 mt-2">
            Your adoption request is currently waiting for approval.
          </p>
        </div>
      </div>
    )
  }

  // own pet check
  if (pet?.ownerEmail === user?.email) {
    return (
      <div className="w-full rounded-2xl border border-yellow-500/30 bg-yellow-500/10 shadow-md p-8 flex flex-col items-center text-center gap-4">
        <FaPaw className="text-5xl text-yellow-500" />

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500">
            You Cannot Adopt Your Own Pet
          </h2>

          <p className="text-base-content/70 mt-2">
            This pet belongs to you, so adoption requests are disabled.
          </p>
        </div>
      </div>
    )
  }

  // already adopted
  if (AdoptPet?.isAdopted) {
    return (
      <div className="w-full rounded-2xl border border-gray-400/30 bg-gray-400/10 shadow-md p-8 flex flex-col items-center text-center gap-4">
        <FaPaw className="text-5xl text-gray-500" />

        <div>
          <h2 className="text-2xl font-bold text-gray-500">
            Already Adopted
          </h2>

          <p className="text-base-content/70 mt-2">
            This lovely pet has already found a new home.
          </p>
        </div>
      </div>
    )
  }

  // pending request
  if (AdoptPet[0]?.status === 'pending') {
    return (
      <div className="w-full rounded-2xl border border-warning/30 bg-warning/10 shadow-md p-8 flex flex-col items-center text-center gap-4">
        <IoWarningOutline className="text-5xl text-warning" />

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-warning">
            Request Already Pending
          </h2>

        
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-base-300 bg-base-100 shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">
          Adopt {pet?.petName}
        </h2>

        <p className="text-base-content/70 mt-2">
          Fill out the form below to send your adoption request.
        </p>
      </div>

      <AdoptForm session={session} pet={pet} />
    </div>
  )
}

export default AdoptFormWrapper
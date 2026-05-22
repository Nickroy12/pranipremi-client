'use client'

import { useState } from "react"
import { AdoptReq } from "@/lib/action"
import { toast } from "react-toastify"
import { authClient } from "@/lib/auth-client"

const AdoptForm = ({  pet }) => {
    const { data: session, isPending } = authClient.useSession()
  
    const user = session?.user


  const [pickupDate, setPickupDate] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      alert("Please login first")
      return
    }

  const formData = {
  petId: pet?._id,
  userId: user?.id,
  userName: user?.name,
  userEmail: user?.email,
  pickupDate,
  message,
}

    setLoading(true)

    try {
      const res = await AdoptReq(pet?._id, formData)


      if (!res?.success) {
        throw new Error(res?.message || "Request failed")
      }

      setPickupDate("")
      setMessage("")
      toast.success("Adoption request sent successfully!")
    } catch (err) {
   
      toast.error(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-170 mx-auto p-8 bg-white/80 backdrop-blur border border-amber-200 shadow-xl rounded-2xl">

      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Adopt <span className="text-amber-600">{pet?.petName}</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Fill up the form to send your adoption request
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name */}
        <div>
          <label className="text-sm text-gray-600">Your Name</label>
          <input
            value={user?.name || ""}
            disabled
            className="w-full mt-1 border border-gray-200 p-3 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input
            value={user?.email || ""}
            disabled
            className="w-full mt-1 border border-gray-200 p-3 rounded-xl bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Pickup Date */}
        <div>
          <label className="text-sm text-gray-600">Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full mt-1 border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm text-gray-600">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Why do you want to adopt this pet?"
            className="w-full mt-1 border border-gray-200 p-3 rounded-xl h-28 resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 hover:bg-amber-700 disabled:opacity-50 transition text-white font-semibold p-3 rounded-xl shadow-md"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  )
}

export default AdoptForm
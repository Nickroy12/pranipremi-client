'use client'

import { useEffect, useState } from 'react'
import { FaUsers, FaHeart, FaFire } from 'react-icons/fa'

const Counter = ({ target }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const step = target / 80

    const timer = setInterval(() => {
      start += step

      if (start >= target) {
        start = target
        clearInterval(timer)
      }

      setCount(Math.floor(start))
    }, 20)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count.toLocaleString()}+</span>
}

const StatsSection = () => {
  const stats = [
    { icon: <FaUsers />, label: 'Users', value: 2500 },
    { icon: <FaHeart />, label: 'Matches', value: 1800 },
    { icon: <FaFire />, label: 'Active', value: 320 },
  ]

  return (
    <section className="p-6">

      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Our Community Stats
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Real-time impact of Pranipremi 💙
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-base-100 rounded-xl p-6 text-center
            shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex justify-center text-2xl text-amber-500 mb-2">
              {item.icon}
            </div>

            <h2 className="text-2xl font-semibold">
              <Counter target={item.value} />
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default StatsSection
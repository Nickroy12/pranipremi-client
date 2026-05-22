'use client'

import { authClient } from '@/lib/auth-client'
import NavLink from '@/ui/NavLink'
import ThemeToggle from '@/ui/Toogle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdPets } from 'react-icons/md'

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()

  const user = session?.user


  const handleLogout = async () => {
    await authClient.signOut()
  }

  const links = (
    <>
      <NavLink href="/" icon={CiHome}>
        Home
      </NavLink>

      <NavLink href="/pets" icon={MdPets}>
        All Pets
      </NavLink>
    </>
  )

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <MdPets className="text-2xl" />
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link href="/">
          <Image src="/logo.png" width={120} height={70} alt="logo" />
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-3 px-1">
          {links}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end gap-3">

        <ThemeToggle />

        {!isPending && user ? (
          <div className="dropdown dropdown-end">
              {user.name}
            {/* Avatar Button */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ring ring-amber-400 ring-offset-base-100 ring-offset-2">
              
                <Image
                  src={user.image || "/default-user.png"}
                  alt="user"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>

           

              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-500"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link href="/login" className="btn btn-sm text-white bg-amber-400 hover:bg-amber-500">
            Login
          </Link>
        )}

      </div>
    </div>
  )
}

export default Navbar
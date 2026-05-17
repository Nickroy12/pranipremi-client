'use client'

import NavLink from '@/ui/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiHome } from 'react-icons/ci'
import { MdPets } from 'react-icons/md'


const Navbar = () => {
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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link href="/">
          <Image src="/logo.png" width={120} height={70} alt="logo" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" gap-3 menu-horizontal px-1">{links}</ul>
      </div>
           
      <div className="navbar-end">
        <button className="btn bg-amber-400">Login</button>
      </div>
    </div>
  )
}

export default Navbar
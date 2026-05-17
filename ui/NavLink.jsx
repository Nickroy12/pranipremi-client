'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children, icon: Icon }) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <li>
      <Link
        href={href}
        className={`text-2xl font-light flex items-center gap-1 transition-colors duration-200 ${
          isActive ? 'text-amber-400' : 'text-gray-400 hover:text-amber-400'
        }`}
      >
        {Icon && <Icon />}
        {children}
      </Link>
    </li>
  )
}

export default NavLink
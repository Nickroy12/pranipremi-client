import NavLink from '@/ui/NavLink'
import React from 'react'
import { RiMenuFold2Line } from 'react-icons/ri'

const DashboardLayout = ({children}) => {
  return (
<div className="drawer lg:drawer-open">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
     <label htmlFor="my-drawer-3" className=" p-2 drawer-button lg:hidden">
     <RiMenuFold2Line className='text-xl font-bold cursor-pointer' />
    </label>
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
    {children}
 
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 min-h-full w-80 p-4">
      {/* Sidebar content here */}
       <NavLink href="/dashboard">Add Pet+</NavLink>
 <NavLink href="/dashboard/my-request" >My Request</NavLink>

    </ul>
  </div>
</div>
  )
}

export default DashboardLayout
import React from 'react'
import Link from "next/link";

const NavLink = [
     {
          name: 'Dashboard',
          href: '/dashboard'
     },
     {
          name: 'Blog',
          href: '/dashboard/blog'
     },
     {
          name: 'Setting',
          href: '/dashboard/setting'
     },
]

export default function layout({ children,}: Readonly<{children: React.ReactNode;}>) {

  return (
    <div className='py-10 px-7'> 
          <div className="div flex items-start gap-5">
               <div className="sidebar sticky top-22 min-w-72 bg-white border border-slate-200 p-5 rounded-lg">
                    <nav className="flex gap-1 flex-col">
                         {NavLink.map((link)=>{
                              return <Link key={link.name} className='hover:bg-slate-200 py-1 px-2 rounded-md' href={link.href}>{link.name}</Link>
                         })}
                    </nav>
               </div>
               <div className="w-full">
                    {children}            
               </div>
          </div>
    </div>
  )
}

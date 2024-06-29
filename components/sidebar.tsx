'use client'
import React from 'react'
import {Links} from "../utils/sidebar-links"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/store/store'
type Props = {}

const SideBar = (props: Props) => {
  const router=usePathname();
  console.log(router)
  const {navbar,setnavbar}=useAppContext();
  return (
    <div className={`text-purple-900 justify-start w-full min-h-screen sticky top-0 flex items-center flex-col gap-6 p-6 md:z-0 z-50 `}>
         {
            Links.map((elm)=>(
                <Link href={elm.path} className={`${router === elm.path?'bg-secondary md:ml-4 ml-2 p-4 rounded' : ''} w-4/5 border-gray-100 flex gap-4 h-8  items-center`}>
                    <div className='w-6 h-6'>
                  {
                    elm.icon
                  }
                  </div>
                 
                    </Link>
            ))
         }
    </div>
  )
}

export default SideBar
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
    <div className={`bg-primary h-screen md:w-1/5 w-1/5 sticky top-0 left-0 md:flex items-center flex-col gap-6 pt-8 md:z-0 z-50 ${navbar == true? 'flex absolute right-0 ':'hidden' }`}>
         {
            Links.map((elm)=>(
                <Link href={elm.path} className={`${router === elm.path?'bg-secondary md:ml-4 ml-2 p-4 rounded' : ''} w-4/5 border-gray-100 flex gap-4 h-8  items-center`}>
                    <div className='w-6 h-6'>
                  {
                    elm.icon
                  }
                  </div>
                    <h3 className='medium-heading md:block hidden'>{elm.name}</h3>
                    </Link>
            ))
         }
    </div>
  )
}

export default SideBar
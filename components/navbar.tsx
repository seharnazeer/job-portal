'use client'
import { useAppContext } from '@/store/store'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const {navbar,setnavbar}=useAppContext()
  return (
    <div className=' w-full h-20 text-white bg-purple-900 flex  items-center justify-between pl-8 pr-8'>
        <div className='flex gap-2 items-center'>
        <Image src='/favico.png' height={70} width={70}  alt='logo'/>
        <h3 className=' italic font-bold font-mono'>Job Portal</h3>
        </div>
        
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <div className=' justify-end flex gap-2 items-center'>
            <Link href='/postjob'>
          <button className='p-2 rounded bg-white text-slate-900'>Post Job</button>
          </Link>
        <div className='w-8 h-8'>

          <UserButton  />
          </div>
          </div>
        </SignedIn>
      
        </div>
  )
}

export default Navbar
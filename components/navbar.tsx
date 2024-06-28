'use client'
import { useAppContext } from '@/store/store'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  const {navbar,setnavbar}=useAppContext()
  return (
    <div className=' w-full h-20 bg-white flex  items-center justify-between pl-8 pr-8'>
        <div className='flex gap-2 items-center'>
        <Image src='/favico.png' height={70} width={70}  alt='logo'/>
        <h3 className='text-secondary italic font-bold font-mono'>MeetWithDoc</h3>
        </div>
        
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        <div className='w-8 h-8'>
          <UserButton  />
          </div>
        </SignedIn>
        <button onClick={()=> { navbar==true? setnavbar(false):setnavbar(true)}} className='md:hidden block text-secondary'>Hamburger</button>
        </div>
  )
}

export default Navbar
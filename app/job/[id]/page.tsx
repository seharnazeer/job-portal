'use client'
import { db } from '@/utils/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

type Props = {}

const JobDesc = ({params}) => {
  console.log(params);
  const [job,setjob]=useState<any>([]);
  async function getJob(){
    const docRef=doc(db,"job-portal",params.id)
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        console.log("job",docSnap.data());
        setjob(docSnap.data());
        console.log(job)
    }
  }
  useEffect(()=>{
    getJob()
  },[])
  return (
    <div className='flex w-4/5 flex-col min-h-screen'>
        {
            job.length >0 ?<div className='flex flex-col'>
            <h2 className=''>{job.title}</h2>
            </div>:null
        }

    </div>
  )
}

export default JobDesc
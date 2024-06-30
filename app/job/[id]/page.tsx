'use client'
import { db } from '@/utils/firebase.config';
import { addLike, removeLike } from '@/utils/updateLike';
import { useUser } from '@clerk/nextjs';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';

type Props = {}

const JobDesc = ({params}) => {
    const {user,isLoaded}=useUser();
  console.log(params);
  const [job,setjob]=useState<any>([]);
  async function getJob(){
    const docRef=doc(db,"job-portal",params.id)
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
        console.log("job",docSnap.data());
        const newdata=docSnap.data();
        setjob([{id:docSnap.id,title:newdata.title,desc:newdata.desc,type:newdata.type,tags:newdata.tags,location:newdata.location,savedBy:newdata.savedBy,support:newdata.support}]);
        console.log(job)
    }
  }
  useEffect(()=>{
    getJob()
  },[])
  const like=async (id:string | undefined,docId:string)=>{
      console.log(id,docId)
       await addLike(id!,docId)
       getJob()
  }
  const dislike=async (id:string | undefined,docId:string)=>{
    await removeLike(id!,docId)
   getJob()
   }
  return (
    <div className='flex  items-center pt-24 flex-col min-h-screen'>
        {
            job.length >0 ?<div className='flex relative w-4/5 flex-col gap-2'>
                {
                    job[0].savedBy.includes(user?.id) ?<FaHeart onClick={()=>dislike(user?.id,job[0].id)} className='w-6h-6 text-purple-900 absolute top-4 right-4' />:<FaHeart onClick={()=>like(user?.id,job[0].id)} className='w-6h-6 absolute top-4 right-4' />
                }
            <h2 className='font-bold md:text-4xl text-xl'>{job[0].title}</h2>
            <p>{job[0].desc}</p>
            <div className='flex flex-wrap gap-4'>
            {
                job[0].tags.map((elm:any)=>(
                    <h3 className='bg-slate-200 rounded p-2'>{elm}</h3>
                ))
            }
            <h2 className='text-base font-mono bg-purple-900 text-white p-2 rounded-md '>
                <span className=' mr-4 font-bold'>Type:</span>
                {
                    job[0].type
                }
            </h2>
            <h2 className='text-base font-mono bg-purple-900 text-white p-2 rounded-md '>
                <span className=' mr-4 font-bold'>Location:</span>
                {
                    job[0].location
                }
            </h2>
            
            </div>
            <div>
            <h2 className='text-base font-mono p-2 rounded-md '>
                <span className=' mr-4 font-bold'>Drop Your CV Here:</span>
                {
                    job[0].support
                }
            </h2>
                </div>
            </div>:null
        }

    </div>
  )
}

export default JobDesc
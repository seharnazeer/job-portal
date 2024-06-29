'use client'
import { db } from '@/utils/firebase.config';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards';
import { useUser } from '@clerk/nextjs';

type Props = {}

const MyJobs = (props: Props) => {
  const [alljobs,setalljobs]=useState<any>([]);
  const {user,isLoaded}=useUser();
  async function getData(){
 const docRef=query(collection(db,"job-portal"), where("postedBy","==",user?.id ))
 const docSnap=await getDocs(docRef)
 let all : any =[];
//  setalljobs(docSnap)
docSnap.forEach((doc)=>{
  console.log(doc.id, doc.data());
  const data=doc.data();
  console.log("s",data.title);
 all.push({title:data.title,desc:data.desc,postedBy:data.postedBy,support:data.support,type:data.type,tags:data.tags,location:data.location,id:doc.id, savedBy:data.savedBy})
 

})
setalljobs(all);
console.log('g',alljobs)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className='flex flex-col gap-6  overflow-y-scroll p-6 items-center h-screen'>
    {
      alljobs.length>0? alljobs.map((elm : any)=>(
        <Cards elm={elm} />
      )):null
    }
    </div>
  )
}

export default MyJobs
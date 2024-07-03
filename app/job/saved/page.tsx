'use client'
import { db } from '@/utils/firebase.config';
import { collection, doc, getDoc, getDocs, query, where , onSnapshot} from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Cards from '@/components/Cards';
import { useUser } from '@clerk/nextjs';
import { Suspense } from 'react';
type Props = {}

const Saved = (props: Props) => {
  const [alljobs,setalljobs]=useState<any>([]);
  const {user,isLoaded}=useUser();
  async function getData(){
 const docRef=query(collection(db,"job-portal"), where("savedBy","array-contains",user?.id ))
 const docSnap=await getDocs(docRef)
 
//  setalljobs(docSnap)
try{
const all=docSnap.docs.map((doc)=>{
  console.log(doc.id, doc.data());
  const data=doc.data();
  console.log("s",data.title);
 return {title:data.title,desc:data.desc,postedBy:data.postedBy,support:data.support,type:data.type,tags:data.tags,location:data.location,id:doc.id, savedBy:data.savedBy}
 

})
setalljobs(all);
}catch(e){
    console.log(e);
}


  }
  useEffect(()=>{
    getData()
  },[])
  console.log('g',alljobs)
  const getUpdate=(docId:string)=>{

  
    onSnapshot(doc(db,"job-portal",docId),(doc)=>{
        console.log("updated ddata", doc.data(),doc.id)
        setalljobs((prev:any)=>prev.map((el:any)=>el.id=== docId?doc.data():el))
       
      })
    }
  return (
    
    <div className='flex flex-col gap-6  overflow-y-scroll p-6 items-center h-screen'>
    
    {
      alljobs.length>0? alljobs.map((elm : any)=>(
        <Cards key={elm.id} id={user?.id} updateJob={(docid,type)=>{
          getUpdate(docid)
        }} elm={elm} />
      )):null
  }

    </div>
  )

}
export default Saved
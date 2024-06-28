'use client'
import { useUser } from '@clerk/nextjs'
import React, { useState } from 'react'
import {collection,addDoc} from "firebase/firestore"
import { db } from '@/utils/firebase.config'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/components/navbar'
type Props = {}

const JobPost = (props: Props) => {
    const [title,settitle]=useState("")
    const [desc,setdesc]=useState("")
    const [type,settype]=useState("")
    const [localtion,setlocaltion]=useState("")
    const [tags,settags]=useState<String[]>([])
    const [newtag,setnewtag]=useState("")
    const [support,setsupport]=useState("")
    const {user,isLoaded}=useUser();
    const handleSubmit=async (e : any)=>{
        console.log('hello')
        // e.preventDefault();
        if(title == ""  || desc == "" || type == ""  || localtion == ""|| tags.length ==0 || support == "") {
            
            toast(`All fields are required`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
            return};
        console.log(user, isLoaded);
        if(user){
            try{
               
           const docRef=await addDoc(collection(db, "job-portal"),{
            title,
            desc,
            type,
            tags,
            location:localtion,
            support,
            postedBy: user?.id
           })
           if(docRef.id){
            settitle("")
                setdesc("")
                settags([])
                settype("")
                setsupport("")
                setlocaltion("")
                console.log("hellll")
           toast("Job Posted Successfully!");
           
           }
        }catch(e){
            console.log("error",e)
            toast("Error While Uploading Try Again")
        }
        }
    }
  return (
    <>
    <Navbar />
    <ToastContainer />
    <div className='w-full flex items-center justify-between min-h-screen text-purple-900'>
        <div className='flex w-full items-center  flex-col justify-center'>
            <h3 className=' text-xl md:text-5xl font-bold font-mono mb-6 mt-6'>Post Job</h3>

           <div className='flex w-4/5 flex-col gap-4'>
                <input value={title} placeholder='Job Title' className='p-2 rounded'  onChange={({target:{value}})=>settitle(value)} />
                <textarea value={desc} rows={3} placeholder='Desc' className='p-2 rounded'  onChange={({target:{value}})=>setdesc(value)} />
                    <div className='flex gap-2'>
                    <input value={localtion} placeholder='Location' className='p-2 w-2/4 rounded' onChange={({target:{value}})=>setlocaltion(value)}  />
                    <select value={type} className='p-2 w-2/4 rounded' onChange={({target:{value}})=> settype(value)}>
                    <option defaultChecked>Job Type</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                        <option>On Site</option>
                    </select>
                    </div>
                    <input value={support} className='rounded p-2 ' placeholder='Support Email' onChange={({target:{value}})=>setsupport(value)} />
                 <div className='flex flex-col gap-2'>
                    <div className='flex flex-row flex-wrap gap-2'>
                    {
                        tags.length >0?tags.map((elm)=>(
                            <div className='p-1 flex gap-2 bg-slate-200 text-slate-600'>
                            <h2 >{elm}</h2>
                            <h2 onClick={()=>{settags((prev)=>prev.filter((el)=>el!==elm));
                                console.log("ddbhn",tags)
                            }} className=' rotate-90 cursor-pointer'>x</h2>
                            </div>

                        )):""
                    }
                    </div>
                    <div className='flex gap-2'>
                        <input type="text" placeholder='Keywords' className='p-2 w-2/4 rounded'
                        value={newtag} onChange={({target:{value}})=>setnewtag(value)}/>
                        <button 
                        type='button'
                        onClick={()=>{
                            console.log("hjeel",newtag)
                            if(newtag == "") return
                            settags([...tags,newtag.replace(" ","")]);
                            console.log(newtag)
                            setnewtag("")
                        }} className='bg-purple-900 text-white w-2/4 rounded'>Add</button>

                    </div>

                 </div>
                 <button onClick={handleSubmit} className='w-32 bg-purple-900 p-2 rounded text-white self-center'>Add</button>
            </div>

        </div>
    </div>
    </>
  )
}

export default JobPost
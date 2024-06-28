'use client'
import React, { useState } from 'react'

type Props = {}

const JobPost = (props: Props) => {
    const [title,settitle]=useState("")
    const [desc,setdesc]=useState("")
    const [type,settype]=useState("")
    const [localtion,setlocaltion]=useState("")
    const [tags,settags]=useState<String[]>([])
    const [newtag,setnewtag]=useState("")
    const [support,setsupport]=useState("")
  return (
    <div className='w-full flex items-center justify-between min-h-screen text-purple-900'>
        <div className='flex w-full items-center  flex-col justify-center'>
            <h3 className=' text-xl md:text-5xl font-bold font-mono'>Post Job</h3>

            <form className='flex w-4/5 flex-col gap-4'>
                <input placeholder='Job Title' className='p-2 rounded'  onChange={({target:{value}})=>settitle(value)} />
                <textarea rows={3} placeholder='Desc' className='p-2 rounded'  onChange={({target:{value}})=>setdesc(value)} />
                    <div className='flex gap-2'>
                    <input placeholder='Location' className='p-2 w-2/4 rounded' onChange={({target:{value}})=>setlocaltion(value)}  />
                    <select className='p-2 w-2/4 rounded' onChange={({target:{value}})=> settype(value)}>
                    <option defaultChecked>Job Type</option>
                        <option>Remote</option>
                        <option>Hybrid</option>
                        <option>On Site</option>
                    </select>
                    </div>
                    <input className='rounded p-2 ' placeholder='Support Email' onChange={({target:{value}})=>setsupport(value)} />
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
                        <input type="text" placeholder='Keywords' className='p-2 w-2/4 rounded' onChange={({target:{value}})=>setnewtag(value)}/>
                        <button 
                        type='button'
                        onClick={()=>{
                            console.log("hjeel",newtag)
                            if(newtag == "") return
                            settags([...tags,newtag]);
                            console.log(newtag)
                            setnewtag("")
                        }} className='bg-purple-900 text-white w-2/4 rounded'>Add</button>

                    </div>

                 </div>
                 <button type='submit' className='w-32 bg-purple-900 p-2 rounded text-white self-center'>Add</button>
            </form>

        </div>
    </div>
  )
}

export default JobPost
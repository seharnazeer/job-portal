import React from 'react'
import Image from 'next/image'
import { FaHeart } from "react-icons/fa";
import Link from 'next/link';
import { addLike, removeLike } from '@/utils/updateLike';
type Props = {
    elm:{title:string,
    desc:string,
    id:string,
    type:string,
    tags:string[],
    support:string,
    location:string,
    postedBy:string,
    savedBy: string[]
    },
    id:string | undefined
    updateJob:(docId:string,type:string)=>void
    
}
const colors = {
  secondary: '#ff5722',
  lightpurple: '#d1c4e9',
  darkblue: '#303f9f'
};
const Cards = (props: Props) => {
    
  return (
    <div  
     className={`  shadow-md shadow-purple-900 w-4/5 text-black relative flex rounded-xl p-6 flex-col justify-center  bg-slate-100`}>
      {
        props.elm.savedBy.includes(props.id!) ?<FaHeart onClick={async()=>{
          console.log('jhfehivfue')
          await removeLike(props.id!,props.elm.id);
         props.updateJob(props.elm.id,'remove');
         }}  className={`absolute text-purple-900  right-4 top-4 w-6 h-6`} />:<FaHeart onClick={async()=>{
          console.log('jhfehivfue')
          await addLike(props.id!,props.elm.id);
         props.updateJob(props.elm.id,'add');
         }} className={`absolute rotate-180 w-6 h-6 right-4 top-4`} />
      }
      
        <div className='flex gap-2'>
       
       <Link href={`/job/${props.elm.id}`}className='text-lg font-semibold'>{props.elm.title}</Link>
       </div>
       <p className='text-sm'>{props.elm.desc.substring(0,300)}...</p>
<div className='flex flex-wrap gap-4 mt-6'>
       {
        props.elm.tags.map((elm)=>(
          <h2 className=' p-2  rounded bg-slate-200 text-black'>{elm}</h2>
        ))
       }
       </div>
    </div>
  )
}

export default Cards
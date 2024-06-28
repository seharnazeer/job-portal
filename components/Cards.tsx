import React from 'react'
import Image from 'next/image'
type Props = {
    title:string,
    desc:string,
    color:string,
    icon:string,
    handler: ()=> void
      
    
}
const colors = {
  secondary: '#ff5722',
  lightpurple: '#d1c4e9',
  darkblue: '#303f9f'
};
const Cards = (props: Props) => {
    console.log(props.color)
  return (
    <div onClick={()=>{console.log("hello"); props.handler()}} className={` text-white flex rounded p-4 flex-col justify-center  h-36 ${props.color}`}>
        <div className='flex gap-2'>
       <Image src={props.icon} width={40} height={40} alt="icon" />
       <p className='text-lg font-semibold'>{props.title}</p>
       </div>
       <p className='text-sm'>{props.desc}</p>
    </div>
  )
}

export default Cards
'use clients'
import { useAppContext } from '@/store/store'

import Modal from 'react-responsive-modal'
import { useUser } from '@clerk/nextjs';
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';
type Props = {

}
const initialValues = {
  dateTime: new Date(),
  description: '',
  link: '',
};
const LaunchMeeting = (props: Props) => {
    const {launch , setlaunch}= useAppContext();
    const router=useRouter();
    const [values,setvalues]=useState(initialValues);
    const [callDetail,setCallDetail]=useState<Call>();
    const client = useStreamVideoClient();
    const {user}=useUser();
    const createMeeting=async()=>{
         if(!client || !user) return;
         try{
            if(!values.dateTime){
              toast(`&#128543; Date not selected`, {
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
            }
            const id=crypto.randomUUID();
            const call=client.call('default',id);
            if(!call) throw ("Call is not created");
            const startsAt= values.dateTime.toISOString() ||  new Date(Date.now()).toISOString();
            const description = values.description || "Instant Meeting"
            await call.getOrCreate({
                data:{
                    starts_at:startsAt,
                    custom:{
                        description:description
                    }
                }
            })
            setCallDetail(call)

            if(!values.description){
                 router.push(`/meeting/${call.id}`)
            }
    }
    catch(error){
        throw Error("Failed to create Meeting")
    }

    }

  return (
    <Modal open={launch} onClose={()=>setlaunch(false)} center >
        <div className='flex flex-col gap-4 p-4 rounded '>
        <h2 className='text-secondary font-bold text-xl'>Launch New Instant Meeting</h2>
       <button onClick={createMeeting} className='bg-secondary text-white rounded-lg w-full h-10'>Start Now</button>
       </div>
      </Modal>
  )
}

export default LaunchMeeting
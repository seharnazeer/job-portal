'use client'

import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react"

export const useGetMeetingById=(id:string | string[])=>{
    const [isloading,setisloaded]=useState(true);
    const [call,setcall]=useState<Call>();
    const client=useStreamVideoClient();

    useEffect(()=>{
      if(!client) return;
      const loadCalls=async()=>{
        const {calls}= await client.queryCalls({
            filter_conditions:{
                id
            }
        })
        if(calls.length> 0) setcall(calls[0])
        setisloaded(false)
      }
      loadCalls();
    },[client,call])

    return {call,isloading};
         
}
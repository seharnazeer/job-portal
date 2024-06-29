'use client'
import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";
import { createContext, useContext, useState } from "react";


const AppContext=createContext<any>(undefined);

export function AppWrapper({children}:{children:React.ReactNode}){
  let [displayJoinLink,setDisplayJoinLink]=useState(false);
  const [navbar,setnavbar]=useState(false);
  const [launch,setlaunch]=useState(false);
  return (
    <AppContext.Provider value={{
     displayJoinLink,
     setDisplayJoinLink,
     navbar,
     setnavbar,
     launch,
     setlaunch
    }}>
      <Navbar />
      <div className="flex w-full ">
        <div className=" w-1/4">
        
          <SideBar />
        </div>
        <div className="p-3   w-full">
    {
      children
    }
    </div>
    </div>
    </AppContext.Provider>
  )
}

export function useAppContext(){
  return useContext(AppContext);
}
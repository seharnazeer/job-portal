'use client'
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
    {
      children
    }
    </AppContext.Provider>
  )
}

export function useAppContext(){
  return useContext(AppContext);
}
"use client";
import React, { useState } from "react";
import Image from "next/image";
import BottomTop from "@/utils/motions/botton-top";
import Cards from "./Cards";
import { JoinMeeting } from "./Modals/joinMeeting";
import { useAppContext } from "@/store/store";
import LaunchMeeting from "./Modals/launchMeeting";

type Props = {};

const HeaderSection = (props: Props) => {
const [keyword,setkeyword]=useState("")

  return (
    <div className="">
      <div className="  rounded-lg shadow-md  items-center md:flex-row flex-col  justify-center  bg-white flex md:p-0 p-4 ">
        <div className="w-auto text-nowrap justify-center items-center  flex flex-col gap-4 h-full  font-semibold text-lg">
          <div className="p-2 rounded">Search Jobs</div>
          <div className="flex gap-2">
          <input placeholder="Write keywords" className="p-2 border-2  " />
          <button className="p-2 rounded w-20 text-white bg-purple-900">Search</button>
          </div>
        </div>
       
  
       </div>
    </div>
  );
};

export default HeaderSection;

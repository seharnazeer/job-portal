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
  const [display, setdisplay] = useState(false);
  const { displayJoinLink, setDisplayJoinLink, launch,setlaunch } = useAppContext();
  return (
    <div className="">
      <div className="  rounded-lg shadow-md  items-center md:flex-row flex-col  justify-between relative bg-white flex md:p-0 p-4 ">
        <div className="w-auto text-nowrap justify-center  flex flex-col gap-10 h-full  font-semibold text-lg md:pl-12 text-left">
          <div className="p-2  bg-primary/55 rounded">UpComing Meeting</div>
          <p className="">12:43 PM</p>
        </div>
        {/* <div className='p-6 w-2/4 flex flex-col gap-6'>
        <p className=' font-bold text-5xl text-wrap  '>Maintain the Record of your 
       
    <span className='text-secondary underline underline-offset-4 italic'>Meeting with Clients/Worker</span></p>
    <p>Write important points with calls save it ,track your progress against it and access it whenever you want.</p>
    </div> */}
        <Image
          alt="doc"
          className="md:block hidden"
          src="/assets/WomenWithComputer.png"
          width={200}
          height={200}
        />
        <div className="absolute right-[300px]">
          <BottomTop>
            <Image
              alt="doc"
              src={"/assets/hero-doc.png"}
              width={100}
              height={100}
            />
          </BottomTop>
        </div>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {[
          {
            title: "Upcomings",
            desc: "Your Scheduled Calls",
            icon: "/assets/icons/logo.png",
            color: "bg-secondary",
            handler: () => {},
          },
          {
            title: "New Meeting",
            desc: "Create New Instant Meeting",
            icon: "/assets/icons/logo.png",
            color: "bg-purple-900",
            handler: () => {
              setlaunch(true)
            },
          },
          {
            title: "Join Meeting",
            desc: "Join Meeting via Link",
            icon: "/assets/icons/logo.png",
            color: "bg-blue-900",
            handler: () => {
              setDisplayJoinLink(true);
            },
          },
        ].map((elm) => (
          <Cards
            color={elm.color}
            title={elm.title}
            desc={elm.desc}
            icon={elm.icon}
            handler={elm.handler}
          />
        ))}
      </div>
      {displayJoinLink == true ? <JoinMeeting toOpen={true} /> : null}
      {
        launch == true? <LaunchMeeting />:null
      }
    </div>
  );
};

export default HeaderSection;

"use client";
import { db } from "@/utils/firebase.config";
import { collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { useUser } from "@clerk/nextjs";

type Props = {};

const JobSection = (props: Props) => {
  const { user, isLoaded } = useUser();
  const [alljobs, setalljobs] = useState<any>([]);
  const [keywords,setkeywords]=useState<string>("")
  async function getData() {
    const docRef = query(collection(db, "job-portal"));
    const docSnap = await getDocs(docRef);
    let all: any = [];
    //  setalljobs(docSnap)
    docSnap.forEach((doc) => {
      console.log(doc.id, doc.data());
      const data = doc.data();
      console.log("s", data.title);
      all.push({
        title: data.title,
        desc: data.desc,
        postedBy: data.postedBy,
        support: data.support,
        type: data.type,
        tags: data.tags,
        location: data.location,
        id: doc.id,
        savedBy: data.savedBy,
      });
    });
    setalljobs(all);
    console.log("g", alljobs);
  }
  useEffect(() => {
    getData();
  }, []);
  
  const getUpdate=(docId:string)=>{

  
onSnapshot(doc(db,"job-portal",docId),(doc)=>{
    console.log("updated ddata", doc.data(),doc.id)
    setalljobs((prev:any)=>prev.map((el:any)=>el.id=== docId?doc.data():el))
   
  })
}

const handleSearch=async()=>{
  if(keywords == "") return;
  try {
    console.log("hegfwufjbwjf",keywords.replace(" ","").toLowerCase())
    const docRef = query(collection(db, 'job-portal'), where('tags', 'array-contains', keywords.replace(" ","").toLowerCase()));
    const docSnap = await getDocs(docRef);

    const results = docSnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

   setalljobs(results)
  } catch (error) {
    console.error('Error fetching data:', error);
  
  }
}
  return (
    <>
     <div className="  rounded-lg shadow-md  items-center md:flex-row flex-col  justify-center  bg-white flex md:p-0 p-4 ">
        <div className="w-auto text-nowrap justify-center items-center  flex flex-col gap-4 h-full pb-6 font-semibold text-lg">
          <div className="p-2 rounded">Search Jobs</div>
          <div className="flex gap-2">
          <input onChange={({target:{value}})=>setkeywords(value)}
           placeholder="Write keywords" className="p-2 border-2  " />
          <button onClick={handleSearch} className="p-2 rounded w-20 text-white bg-purple-900">Search</button>
          </div>
        </div>
       
  
       </div>
    <div className="flex flex-col gap-6  overflow-y-scroll p-6 items-center h-screen">
      {alljobs.length > 0
        ? alljobs.map((elm: any) => (
            <Cards
              updateJob={(docId, type) => {
                getUpdate(docId)
                // type == "add"
                //   ? setalljobs([
                //       ...alljobs.filter(
                //         (el: any) =>
                //           (el.id = docId ? el.savedBy.push(user?.id) : el)
                //       ),
                //     ])
                //   : setalljobs([
                //       ...alljobs.filter(
                //         (el: any) =>
                //           (el.id = docId
                //             ? el.savedBy.splice(el.savedBy.indexOf(user?.id))
                //             : el)
                //       ),
                //     ]);
              }}
              id={user?.id}
              elm={elm}
            />
          ))
        : null}
    </div>
    </>
  );
};

export default JobSection;
